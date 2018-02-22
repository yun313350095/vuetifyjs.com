<template lang="pug">
  v-container
    v-layout(row wrap)
      v-flex(
        xs12 sm12 md4 lg4
        v-for="(feature, i) in features"
        :key="i"
      )

        img(:src="feature.img")
        h3(v-text="feature.title").mb-4
        p(v-text="feature.text").text-xs-justify
</template>

<script>
  export default {
    data: () => ({
      features: []
    })
  }
</script>
