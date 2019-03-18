const state = {
  user: {},
  is_auth: false,
  error: ''
}

const mutations = {
  'SET_USER' (state, user) {
    state.user = user
    state.is_auth = true
  },
  'LOGOUT_USER' (state) {
    state.user = {}
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
  addUser: ({commit}, user) => {
    commit('SET_USER', user)
  },
  userlogout: ({commit}) => {
    commit('LOGOUT_USER')
  },
  addError: ({commit}, message) => {
    commit('setGlobalError', message)
  },
  clearError: ({commit}) => {
    commit('clearGlobalError')
  }
}

const getters = {
  user: state => state.user,
  error: state => state.error
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
