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
            prepend-icon="fa-arrows-h"
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
          <v-card-media height="300px" src="https://picsum.photos/300/400?image=586">
            <span class="headline white--text pl-3 pt-3">Here it Comes </span>
          </v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'ImageView',
  data () {
    return {
      selected: 0
    }
  }
}
</script>
