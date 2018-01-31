<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs6 offset-md3 offset-xs1>
        <v-card>
          <v-slider
            v-model="selected"
            prepend-icon="fa-hand-o-right"
            min="0"
            max="24"
            class="pl-3"
            thumb-label
          />
        </v-card>
      </v-flex>
      <v-spacer />
      <v-flex xs6 offset-md3 offset-xs1>
        <v-card :class="{[`elevation-${selected}`]: true }">
          <v-card-text
            text-xs-center
            ma-0
            class="blue-grey lighten-3 black--text">
            <div>
              Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et
              faucibus. {{ selected }}
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'TextView',
  data () {
    return {
      selected: 0
    }
  }
}
</script>
