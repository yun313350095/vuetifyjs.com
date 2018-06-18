<template>
  <v-app v-cloak>
    <core-drawer />

    <core-toolbar />

    <router-view />

    <core-fab />

    <core-snackbar />
  </v-app>
</template>

<script>
  export default {
    name: 'Documentation'
  }
</script>
