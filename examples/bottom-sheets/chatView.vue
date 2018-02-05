<template>
  <div class="text-xs-center">
    <v-bottom-sheet v-model="sheet" >
      <v-btn
        slot="activator"
        color="cyan"
        dark>See who's online, chat!<v-icon
          size="18px"
          class="pl-3">chat</v-icon></v-btn>
      <v-layout >
        <v-flex
          d-flex
          xs2
          offset-xs2>
          <v-card
            color="green"
            dark>
            <v-card-title
              primary
              class="title">Chats <v-icon
                size="18px"
                class="pl-3">chat</v-icon></v-card-title>
            <v-card-text>
              <v-btn
                dark
                icon>
                <v-icon>thumb_up</v-icon>
              </v-btn>
              <v-btn
                dark
                icon>
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn
                dark
                icon>
                <v-icon>thumb_down</v-icon>
              </v-btn>
            </v-card-text>
            <v-card-text class="title">
              Click to connect!
            </v-card-text>
            <v-card-text class="title text-xs-center">
              <v-icon>fa-dashboard</v-icon>
              <v-icon>dialpad</v-icon>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex
          d-flex
          xs12
          sm6
          md3>
          <v-layout
            row
            wrap>
            <v-flex
            d-flex>
              <v-card
                color="grey"
                dark>
                <v-card-media
                  height="300px"
                  src="https://picsum.photos/300/400?image=1050">
                  <span class="headline white--text pl-3 pt-3">San Antonio, Texas</span>
                </v-card-media>
                <v-card-text class="pl-3">Tom where have you been...
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          d-flex
          xs3>
          <v-list
            two-line
            class="grey lighten-3">
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                class="black--text">{{ item.header }}</v-subheader>
              <v-divider
                v-else-if="item.divider"
                :inset="item.inset"
                :key="index"></v-divider>
              <v-list-tile
                avatar
                v-else
                :key="item.title" >
                <v-list-tile-avatar >
                  <img :src="item.avatar" >
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title
                    v-html="item.title"
                    class="black--text"></v-list-tile-title>
                  <v-list-tile-sub-title
                    v-html="item.subtitle"
                    class="black--text">
                  </v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sheet: '',
      items: [
        {
          header: 'Online Now :'
        },
        {
          avatar: 'https://picsum.photos/250/300?image=1011',
          title: 'Meeting @ Noon',
          subtitle:
            "<span class='text--primary'>Spike Lee</span> &mdash; See me online now"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://picsum.photos/250/300?image=821',
          title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
          subtitle:
            "<span class='text--primary'>Teach me to code Vuetify</span> &mdash; Wish this."
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://picsum.photos/250/300?image=1027',
          title: 'Meeting Sunday',
          subtitle:
            "<span class='text--primary'>Monica Smith</span> &mdash; I can be in your neighborhood..."
        }
      ]
    }
  }
}
</script>
