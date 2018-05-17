<template lang="pug">
  router-view(v-if="languageIsValid")
  not-found-page(v-else to="/en/")
</template>

<script>
  import { camelActual } from '@/util/helpers'
  import { mapState } from 'vuex'
  import languages from '@/i18n/languages.json'
  import NotFoundPage from '@/pages/general/404Page.vue'

  export default {
    components: {
      NotFoundPage
    },

    props: {
      lang: {
        type: String,
        default: 'en'
      }
    },

    data: () => ({
      availableLocales: languages.map(lang => lang.locale),
      languages
    }),

    computed: {
      ...mapState('app', {
        loadedLangs: state => state.loadedLangs
      }),
      languageIsValid () {
        return this.availableLocales.includes(this.lang)
      }
    },

    created () {
      this.$i18n.locale = this.lang
    },

    // async beforeRouteEnter (to, from, next) {
    //   await this.loadLang(to)
    //   next()
    // },

    async beforeRouteUpdate (to, from, next) {
      await this.loadLang(to)
      next()
    },

    methods: {
      async loadLang (to, from, next) {
        const locale = to.params.lang
        const localeFile = camelActual(locale)

        console.log(localeFile)

        if (!this.loadedLangs.includes(locale)) {
          await import(
            /* webpackChunkName: "lang-[request]" */
            `@/lang/${localeFile}/index.js`
          ).then(msgs => this.$i18n.setLocaleMessage(locale, msgs.default))
            .catch(err => Promise.resolve(err))
        }

        document.querySelector('html').setAttribute('lang', locale)
        this.$i18n.locale = locale
      }
    }
  }
</script>
