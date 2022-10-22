<template>
  <div id="main-card">
    <v-card :class="{ blur: dialog }" :ripple=false flat>
      <v-card-title>
        <v-btn class="mr-1" icon small>
          <v-icon small>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <span class="title">Select your financial institution</span>
        <v-spacer></v-spacer>
        <v-btn class="ml-1" icon small>
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
            <v-card
                class="institution"
                min-height="90"
                @click.stop="selectBank(institution)"
            >
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

    <v-dialog
        id="bank-dialog"
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        @click:outside="closeDialog"
    >
      <bank-modal :bank-details="selectedBank" />
    </v-dialog>
  </div>
</template>

<script>
import BankModal from "@/components/banks/BankModal";
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'HomeView',
  components: {
    BankModal
  },

  data() {
    return {
      loading: true,
      dialog: false,
      selectedBank: null
    }
  },

  computed: {
    ...mapGetters({
      financialInstitutions: 'getFinancialInstitutions'
    })
  },

  watch: {
    selectedBank(newValue) {
      if (!newValue) this.dialog = false
    }
  },

  methods: {
    ...mapActions({
      fetchFinancialInstitutions: 'fetchFinancialInstitutions',
      setSelectedBank: 'storeSelectedBank'
    }),

    selectBank(selectedBank) {
      this.selectedBank = selectedBank
      this.setSelectedBank(selectedBank)
      localStorage.setItem('selectedBank', JSON.stringify(selectedBank))
      this.dialog = true
    },

    closeDialog() {
      this.dialog = false
    }
  },

  mounted() {
    this.fetchFinancialInstitutions().then(() =>{
      this.loading = false
    }).catch(err => {
      this.loading = false
      this.$toast.error(err.response.data.message)
    })
  }
}
</script>

<style lang="scss">
.v-dialog__content {
  top: 50%;
}

.v-dialog--fullscreen {
  top: 50% !important;
  border-radius: 25px;
  position: fixed;
  overflow-y: auto;
}
#main-card {
  margin-bottom: 5px;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(24, 109, 209, 0.9) 0%, rgba(24, 44, 209, 0.9) 100%);

  .v-ripple__container {
    display:none !important;
  }

  .blur {
    ::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(1px);
    }
  }

  .v-card {
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
        .v-icon {
          font-size: 30px !important;
        }
      }
    }

    .institution.v-card {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FFFFFF;
    }

    .title {
      font-weight: 500;
      font-size: 20px;
      color: #ffffff;
    }
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
}

</style>
