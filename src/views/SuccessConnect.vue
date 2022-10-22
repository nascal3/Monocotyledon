<template>
  <div id="success-card">
    <v-card flat>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn class="ml-1" @click="navigateBack" icon small>
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="pa-0 d-flex align-center justify-center flex-column">
        <div>
          <v-img width="100px" :src="require('@/assets/circle-check.svg')"></v-img>
        </div>
        <div class="text d-flex align-center justify-center flex-column mt-10">
          <div class="mb-4">Successful! 🎉</div>
          <div>
            Your financial account with GTbank
            was successfully linked to barter.
          </div>
        </div>
        <div>
          <v-btn
              x-large
              depressed
              color="white"
              block
              @click="navigateBack"
          >
            Continue
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SuccessConnect",

  methods: {
    navigateBack() {
      localStorage.clear()
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss">
#success-card {
  background: #DC5D15E5;
  height: 100vh;

  .v-card {
    background: transparent;

    .v-card__title {
      .v-icon {
        color: #FFFFFF;
        font-size: 20px !important;
      }
    }
    .v-card__text {
      height: 50vh;
       div:nth-child(3) {
         margin-top: 100px;
         width: 65%;
         .v-btn {
           border-radius: 10px;
           text-transform: none;
         }
       }

      .text {
        color: #FFFFFF;
        width: 65%;

        div:first-child {
          font-weight: 700;
          font-size: 30px;
        }
        div {
          text-align: center;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
