<template>
  <v-jumbotron
    dark
    gradient="to right top, #1867c0, #19e5f4"
    height="auto"
  >
    <v-container fill-height>
      <v-layout
        align-center
        text-xs-center
        wrap
      >
        <v-flex xs12>
          <img
            src="/static/vuetify-logo-300.png"
            alt="Logo"
            width="196px"
            height="196px"
          >
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
  <!-- v-jumbotron(
      gradient="to right top, #1867c0, #19e5f4"
      height="auto"
      dark
    )
      v-container(fill-height)
        v-layout(align-center wrap).text-xs-center
          v-flex(xs12)
            img(
              src="/static/vuetify-logo-300.png"
              alt="Logo"
              width="196px"
              height="196px"
            )
            h1.display-3 {{ $t("Vuetify.Home.heading1") }}
            div.headline.mb-3 {{ $t("Vuetify.Home.heading1cont") }}
            div.mb-5
              v-btn(
                icon
                color="white"
                v-for="(social, i) in socials"
                :key="i"
                :href="social.href"
                target="_blank"
                rel="noopener"
              ).mx-3
                v-icon(color="primary") {{ social.icon }}
            v-btn(
              color="white"
              class="primary--text"
              :to="{ name: 'getting-started/QuickStart' }"
              large
            ).mb-2
              strong {{ $t("Vuetify.Home.getStarted") }}
            div version {{ $store.state.currentVersion }} -->
</template>
