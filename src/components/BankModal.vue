<template>
  <v-card height="50vh" width="100%">
    <v-card-title>
      <v-img
          :src="bankDetails.icon"
          max-width="50px"
          max-height="50px"
      >
      </v-img>
      <div class="modal-title">Choose log in method</div>
    </v-card-title>

    <v-card-text>
      <v-list :three-line=true>
        <v-list-item to="/connect">
          <v-list-item-avatar size="50">
            <v-img width="50px" :src="require('@/assets/internet_banking.svg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <div class="d-flex">
              <v-list-item-title>
                Link with Internet Banking
              </v-list-item-title>
              <v-icon>mdi-arrow-right</v-icon>
            </div>
            <v-list-item-subtitle>
              Click here to use the credentials you use with your {{bankDetails.name}} internet banking.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider :inset="false"></v-divider>

        <v-list-item to="/connect">
          <v-list-item-avatar size="50">
            <v-img width="50px" :src="require('@/assets/mobile_banking.svg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <div class="d-flex">
              <v-list-item-title>
                Link with Mobile Banking
              </v-list-item-title>
              <v-icon>mdi-arrow-right</v-icon>
            </div>
            <v-list-item-subtitle>
              Click here to use the credentials you use with your {{bankDetails.name}} mobile banking.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: "BankModal",
  props: {
    bankDetails: {
      type: Object,
      default: () => null
    },
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px 20px;

    .modal-title {
      font-weight: 700;
      font-size: 18px;
    }
  }
  .v-list-item {
    cursor: pointer;
    .v-ripple__container {
      display:none !important;
    }

    &__title{
      font-weight: 700;
    }
    .v-icon {
      font-size: 20px;
      color: #000000;
      right: 25px;
    }
  }
}
</style>
