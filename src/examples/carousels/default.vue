<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
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
