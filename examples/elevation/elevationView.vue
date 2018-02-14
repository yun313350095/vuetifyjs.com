<template>
  <v-container
    grid-list-sm
    text-xs-center
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        md6
        offset-sm3
      >
        <v-card>
          <v-slider
            v-model="selected"
            prepend-icon="fa-hand-paper-o"
            min="0"
            max="24"
            class="pl-3"
            thumb-label
          ></v-slider>
        </v-card>
      </v-flex>
      <v-flex
        xs12
        md6
        offset-sm3
      >
        <v-card :class="{[`elevation-${selected}`]: true }">
          <v-card-text text-xs-center ma-0>
            <div>Elevation {{ selected }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'ElevationView',
  data () {
    return {
      selected: 0
    }
  }
}
</script>
