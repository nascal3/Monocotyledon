<template>
  <v-row>
    <div class="d-flex align-center" v-if="accountDetails && !accountDetails.length">
      No account found!
    </div>
    <v-col
        v-for="account in accountDetails"
        :key="account.accountNumber"
        lg="3"
        md="12"
        cols="12"
    >
      <v-card
          class="pa-5"
          :class="{ selected: account.accountNumber === selectedAccount }"
          min-height="107"
          @click="setAccountSelected(account.accountNumber)"
          flat
      >
        <v-row no-gutters>
          <v-col md="3" cols="3">
            <v-img class="currency-icon" width="40px" :src="require('@/assets/currency.svg')"></v-img>
          </v-col>
          <v-col class="d-flex flex-column" md="7" cols="7">
            <div class="name">{{ account.name }}</div>
            <div class="account">{{ account.accountNumber }}</div>
            <div class="amount">{{ account.currency }} {{ thousandSeparator(account.balance) }}</div>
          </v-col>
          <v-col md="2" cols="2">
            <v-img class="check" width="16px" :src="require('@/assets/check.svg')"></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col cols="12" md="12">
      <v-btn
          x-large
          depressed
          :disabled="loading || noSelection"
          color="primary"
          block
          @click="submitAccount"
      >
        Continue
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
</template>

<script>
import formatNumbers from "@/mixins/thousandSeparator";

export default {
  name: "SelectAccount",

  mixins: [ formatNumbers ],

  data() {
    return {
      loading: false,
      noSelection: false,
      accountDetails: null,
      selectedAccount: null
    }
  },

  methods: {
    setAccountSelected(accountNumber) {
      this.selectedAccount = accountNumber
      this.noSelection = false
    },

    submitAccount() {
      this.$router.push('/SuccessConnect')
    }
  },

  created() {
    this.accountDetails = JSON.parse(localStorage.getItem('accounts'))
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  cursor: pointer;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5) !important;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #55586F;

  .v-btn {
    border-radius: 10px;
    text-transform: none;
  }

  .name {
    font-size: 13px;
    font-weight: 400;
  }
  .account {
    font-size: 15px;
    font-weight: 500;
  }
  .amount {
    font-size: 15px;
    font-weight: 700;
    color: #050929;
  }

  .v-image {
    position: relative;
    &.check {
      display: none;
      position: absolute;
      right: 20px;
    }
  }
}
.selected {
  background: #FFFFFF !important;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03) !important;

  .v-image {
    position: relative;
    &.check {
      display: inline-block;
    }
  }
}


</style>
