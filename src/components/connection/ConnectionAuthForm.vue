<template>
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
</template>

<script>
import { mapActions} from 'vuex'

export default {
  name: "ConnectionAuthForm",

  data() {
    return {
      loading: false,
      valid: false,
      userID: null,
      password: null,
      rules: {
        userIDRequired: value => !!value || 'User ID is required',
        passwordRequired: value => !!value || 'Password is required'
      }
    }
  },

  methods: {
    ...mapActions({
      loginSession: 'login'
    }),

    async login() {
      this.valid = this.$refs.form.validate()
      if (!this.valid) return
      this.loading = true
      const payload = {
        username: this.userID,
        password: this.password
      }

      try {
        await this.loginSession(payload)
        this.loading = false
      } catch (error) {
        this.loading = false
        console.error(error.response.data)
        this.$toast.error(error.response.data.message)
      }

    }
  },
}
</script>

<style lang="scss">
#login-card {
  .v-card {
    .v-card__text {
      .content-section {
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
