<template>
  <div id="login-card">
    <v-card v-if="initialized" flat>
      <v-card-title>
        <v-btn class="mr-1" @click="navigateBack" icon small>
          <v-icon small>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-img
            :src="institution.icon"
            max-width="50px"
            max-height="50px"
        >
        </v-img>
        <v-spacer></v-spacer>
        <v-btn class="ml-1" @click="navigateBack" icon small>
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-0">
        <div class="title mb-5 d-flex flex-column align-center">
          {{ isLoggedIn ? 'Choose Account' : 'Log in' }}
          <div v-if="isLoggedIn">Please select an account to continue</div>
        </div>

        <div class="content-section pa-10">
          <select-account v-if="isLoggedIn" />

          <connection-auth v-else/>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ConnectionAuth from "@/components/connection/ConnectionAuthForm";
import SelectAccount from "@/components/connection/SelectAccount";

export default {
  name: "ConnectBank",

  components: {
    ConnectionAuth,
    SelectAccount
  },

  data() {
    return {
      institution: null,
    }
  },

  computed: {
    ...mapGetters({
      selectedBank: 'getSelectedBank'
    }),

    isLoggedIn() {
      return  localStorage.getItem('loggedInCode')
    },

    initialized() {
      return Object.keys(this.institution).length > 0
    }
  },

  methods: {
    navigateBack() {
      localStorage.clear()
      this.$router.push('/')
    }
  },

  created() {
    const bankDetails = JSON.parse(localStorage.getItem('selectedBank'))
    this.institution =  bankDetails || this.selectedBank
  }
}
</script>

<style lang="scss">
#login-card {
  .v-card {
    background: transparent;

    .v-card__title {
      .v-icon {
        color: #55586F;
        font-size: 20px !important;
      }
    }
    .v-card__text {
      .title {
        font-weight: 500;
        font-size: 20px;
        color: #55586F;

        div {
          font-size: 13px;
        }
      }

      .content-section {
        background: linear-gradient(180deg, rgba(217, 79, 0, 0.175) 0%, rgba(217, 79, 0, 0.075) 100%), #FFFFFF;
        height: 100vh;

      }
    }
  }
}
</style>
