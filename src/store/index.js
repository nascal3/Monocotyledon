import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/middleware/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    financialInstitutions: null,
    selectedBank: null,
  },
  getters: {
    getFinancialInstitutions: state => state.financialInstitutions,
    getSelectedBank: state => state.selectedBank
  },
  mutations: {
    setFinancialInstitutions (state, payload) {
      state.financialInstitutions = payload
    },
    setSelectedBank (state, payload) {
      state.selectedBank = payload
    }
  },
  actions: {
    fetchFinancialInstitutions: async ({ commit }) => {
      const url = '/institutions'
      try {
        const response = await api.get(url)
        commit('setFinancialInstitutions', response.data)
      } catch (error) {
        console.log(error)
        throw error
      }
    },
    storeSelectedBank: ({ commit }, payload) => {
      commit('setSelectedBank', payload)
    },
    // eslint-disable-next-line no-unused-vars
    createSession: async ({ commit }, payload) => {
      const url = '/connect/session'
      try {
        const response = await api.post(url, payload)
        console.log('ses', response.data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    login: async ({ commit }) => {
      const url = '/institutions'
      try {
        const response = await api.post(url)
        commit('setFinancialInstitutions', response.data)
      } catch (error) {
        console.log(error)
      }
    },
  }
})
