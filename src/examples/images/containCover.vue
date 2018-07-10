<template>
  <v-container fluid>
    <v-layout justify-space-around>
      <v-flex xs5>
        <div class="title mb-1">Default (cover)</div>
        <v-layout column>
          <div class="subheading">Matching</div>
          <v-img src="https://picsum.photos/500/300?random" aspect-ratio="0.6"></v-img>
          <div class="subheading pt-3">Too low</div>
          <v-img src="https://picsum.photos/500/300?random" aspect-ratio="0.5"></v-img>
          <div class="subheading pt-3">Too high</div>
          <v-img src="https://picsum.photos/500/300?random" aspect-ratio="0.7"></v-img>
        </v-layout>
      </v-flex>

      <v-flex xs5>
        <div class="title mb-1">Contain</div>
        <v-layout column>
          <div class="subheading">Matching</div>
          <v-img src="https://picsum.photos/500/300?random" aspect-ratio="0.6" contain></v-img>
          <div class="subheading pt-3">Too low</div>
          <v-img src="https://picsum.photos/500/300?random" aspect-ratio="0.5" contain></v-img>
          <div class="subheading pt-3">Too high</div>
          <v-img src="https://picsum.photos/500/300?random" aspect-ratio="0.7" contain></v-img>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
