<template>
  <div>
    <v-card id="main-card" flat>
      <v-card-title>
        <v-btn class="mr-3" icon small>
          <v-icon small>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <span class="title">Select your financial institution</span>
        <v-spacer></v-spacer>
        <v-btn class="ml-3" icon small>
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-text-field
            outlined
            color="#FFFFFF"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            single-line
            hide-details
            dark
        ></v-text-field>
      </v-card-text>

      <v-container fluid>
        <v-row class="pb-7">
          <v-col
              v-for="(card, index) in cards"
              :key="index"
              lg="3"
              md="6"
              cols="6"
          >
            <v-card>
              <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
              >
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <div class="bottom"></div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },

  data() {
    return {
      cards: [
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }
  },

  mounted() {
    console.log('>>>', process.env.API_URL);
    console.log('>>>', process.env.SECRET_key);
  }
}
</script>

<style scoped>
.bottom {
  position: fixed;
  height: 60px;
  width: 100%;
  left: 0;
  bottom: 0;

  mask-image: linear-gradient(0deg, rgba(24, 109, 209, 0.9) 0%, transparent 100%);
  backdrop-filter: blur(7px);
}
</style>

<style lang="scss">
#main-card {
  margin-bottom: 5px;
  &.v-card {
    border-radius: 0;
    background: transparent;

    .v-card__title {
      .v-icon {
        color: #ffffff;
        font-size: 20px !important;
      }
    }
    .v-card__text {
      .v-input__control {
        background: rgba(255, 255, 255, 0.1);
        .v-label {
          font-size: 18px;
        }
      }
      .v-input__icon {
        margin-right: 5px;
        .v-icon {
          font-size: 30px !important;
        }
      }
    }

    .title {
      font-weight: 500;
      font-size: 20px;
      color: #ffffff;
    }
  }
}

</style>
