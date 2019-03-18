const state = {
  company: {},
  is_auth: false,
  error: ''
}

const mutations = {
  'SET_COMPANY' (state, company) {
    state.company = company
    state.is_auth = true
  },
  'LOGOUT_COMPANY' (state) {
    state.company = {}
    state.is_auth = false
  },
  'setGlobalError' (state, message) {
    state.error = message
  },
  'clearGlobalError' (state) {
    state.error = ''
  }
}

const actions = {
  addCompany: ({
    commit
  }, company) => {
    commit('SET_COMPANY', company)
  },
  companylogout: ({
    commit
  }) => {
    commit('LOGOUT_COMPANY')
  },
  addError: ({
    commit
  }, message) => {
    commit('setGlobalError', message)
  },
  clearError: ({
    commit
  }) => {
    commit('clearGlobalError')
  }
}

const getters = {
  company: state => state.company,
  error: state => state.error
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
