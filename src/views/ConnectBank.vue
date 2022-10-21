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
        <div class="title mb-5 d-flex justify-center">Log  in</div>

        <div class="login-section pa-10">
          <v-form ref="form" v-model="valid" @submit.prevent="login">
            <v-row no-gutters>
              <v-col cols="12" md="12">
                <v-text-field
                    v-model="userID"
                    label="User ID"
                    name="userID"
                    outlined
                    :rules="[rules.userIDRequired]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    type="password"
                    outlined
                    :rules="[rules.passwordRequired]"
                ></v-text-field>

              </v-col>
              <v-col cols="12" md="12">
                <v-btn
                    x-large
                    depressed
                    type="submit"
                    :disabled="loading"
                    color="primary"
                    class="btn-style"
                    block
                >
                  {{ loading ? 'Linking Account' : 'Link Account'}}
                  <v-progress-circular
                      v-if="loading"
                      :width="3"
                      :size="20"
                      color="#FFFFFF"
                      class="ml-2"
                      indeterminate
                  ></v-progress-circular>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  name: "ConnectBank",

  data() {
    return {
      loading: false,
      institution: null,
      valid: false,
      userID: null,
      password: null,
      rules: {
        userIDRequired: value => !!value || 'User ID is required',
        passwordRequired: value => !!value || 'Password is required'
      }
    }
  },

  computed: {
    ...mapGetters({
      selectedBank: 'getSelectedBank'
    }),

    initialized() {
      return Object.keys(this.institution).length > 0
    }
  },

  methods: {
    navigateBack() {
      this.$router.push('/')
    },

    login() {

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
      }

      .login-section {
        background: linear-gradient(180deg, rgba(217, 79, 0, 0.175) 0%, rgba(217, 79, 0, 0.075) 100%), #FFFFFF;
        height: 100vh;

        form {
          .v-input__slot {
            background: rgba(255, 255, 255, 0.65);
          }
          .v-btn {
            border-radius: 10px;
            &__content {
              text-transform: none;
            }
          }
        }
      }
    }
  }
}
</style>
