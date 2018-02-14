<template>
  <div class="text-xs-center">
    <v-bottom-sheet inset>
      <v-btn
        slot="activator"
        color="purple"
        dark
      >
      Click me Again</v-btn>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs3
          v-for="tile in tiles"
          :key="tile.title"
          d-flex
        >
          <v-card
            flat
            tile>
            <v-card-text>
              <v-avatar
                size="32px"
                tile
              >
                <img
                  :src="`/static/doc-images/bottom-sheets/${tile.img}`"
                  height="90px"
                  :alt="tile.title"
                >
              </v-avatar>
              <span class="hidden-sm-and-down">{{ tile.title }}</span>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  data: () => ({
    tiles: [
      { img: 'keep.png', title: 'Keep' },
      { img: 'inbox.png', title: 'Inbox' },
      { img: 'hangouts.png', title: 'Hangouts' },
      { img: 'messenger.png', title: 'Messenger' },
      { img: 'google.png', title: 'Google+' },
      { img: 'sheets-logo.png', title: 'Sheets' },
      { img: 'google-photos.png', title: 'Photos' },
      { img: 'gslides.png', title: 'Slides' },
      { img: 'gdocs.png', title: 'Docs' },
      { img: 'facebook-fb.png', title: 'Facebook' },
      { img: 'twitter-logo.png', title: 'Twitter' },
      { img: 'drive.png', title: 'Drive' }
    ]
  })
}
</script>
