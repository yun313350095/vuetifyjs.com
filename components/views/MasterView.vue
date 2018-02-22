<template>
  <v-content>
    <section
      v-for="section in sections"
      :id="section.id"
      :key="section.key"
    >
      <component
        v-for="component in section.components"
        :is="component.is"
        :key="component.key"
        :value="component.value"
      />
    </section>
  </v-content>
</template>

<script>
  // Components
  import LayoutView from './LayoutView'

  import Pages from '@/pages_new'
  import { mapState } from 'vuex'
  import { camel, kebab } from '@/util/helpers'

  export default {
    components: {
      LayoutView
    },

    data: () => ({
      page: {},
      sections: []
    }),

    computed: {
      ...mapState(['route'])
    },

    mounted () {
      this.getPage()
    },

    methods: {
      getKey () {
        const i = this.index

        this.index++

        return i
      },
      getNamespace (n) {
        return kebab(n)
      },
      async getPage () {
        const page = this.route.path.replace(`${this.route.params.lang}`, '')

        this.page = this.parsePage(Pages[page])
        await this.$nextTick()
        this.sections = this.parseSections(this.page.sections)
      },
      getValue (s) {
        return null
      },
      parseComponent (c) {
        return {
          is: this.parseIs(
            c.root ? '' : `${this.page.namespace}/`,
            c.is
          )
        }
      },
      parsePage (p) {
        this.resetIndex()

        // do something if nothing 404 probably

        return {
          name: p.name,
          namespace: this.getNamespace(p.name),
          sections: p.sections
        }
      },
      parseSections (s) {
        console.log(s)
        return s.map(se => this.parseSection(se))
      },
      parseSection (s) {
        return {
          components: s.components.map(c => this.parseComponent(c)),
          key: this.getKey(),
          value: this.getValue(s)
        }
      },
      parseIs (namespace, i) {
        const split = i.split('/')
        split[split.length - 1] = camel(split[split.length - 1])
        const is = split.join('/')

        return () => import(
          /* webpackChunkName: "test" */
          `@/components/${namespace}${is}.vue`
        )
      },
      resetIndex () {
        this.index = 0
      }
    }
  }
</script>
