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
              v-for="(institution, index) in financialInstitutions"
              :key="index"
              lg="3"
              md="6"
              cols="6"
          >
            <v-card class="institution" min-height="90">
              <v-img
                  :src="institution.icon"
                  max-width="50px"
                  max-height="50px"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <div class="bottom"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },

  data() {
    return {
      cards: [],
    }
  },

  computed: {
    ...mapGetters({
      financialInstitutions: 'getFinancialInstitutions'
    })
  },

  methods: {
    ...mapActions({
      fetchFinancialInstitutions: 'fetchFinancialInstitutions'
    })
  },

  mounted() {
    this.fetchFinancialInstitutions()
  }
}
</script>

<style scoped>
.institution {
  display: flex;
  justify-content: center;
  align-items: center;
}
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
