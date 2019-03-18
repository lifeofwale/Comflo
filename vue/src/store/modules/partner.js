const state = {
  partner: {},
  is_auth: false,
  error: ''
}

const mutations = {
  'SET_PARTNER' (state, partner) {
    state.partner = partner
    state.is_auth = true
  },
  'LOGOUT_PARTNER' (state) {
    state.partner = {}
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
  addPartner: ({
    commit
  }, partner) => {
    commit('SET_PARTNER', partner)
  },
  partnerlogout: ({
    commit
  }) => {
    commit('LOGOUT_PARTNER')
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
  partner: state => state.partner,
  error: state => state.error
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
