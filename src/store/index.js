import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/middleware/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    financialInstitutions: []
  },
  getters: {
    getFinancialInstitutions: state => state.financialInstitutions
  },
  mutations: {
    setFinancialInstitutions (state, payload) {
      state.financialInstitutions = payload
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
      }

    }
  }
})
