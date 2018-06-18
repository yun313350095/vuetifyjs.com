<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      v-bind:key="i"
      v-bind:src="item.src"
      transition="fade"
      reverseTransition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/images/examples/carousel/squirrel.jpg'
          },
          {
            src: '/images/examples/carousel/sky.jpg'
          },
          {
            src: '/images/examples/carousel/bird.jpg'
          },
          {
            src: '/images/examples/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  #carousel-view
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>
