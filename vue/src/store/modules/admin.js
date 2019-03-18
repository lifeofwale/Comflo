const state = {
  admin: {},
  is_auth: false,
  error: ''
}

const mutations = {
  'SET_ADMIN' (state, admin) {
    state.admin = admin
    state.is_auth = true
  },
  'LOGOUT_ADMIN' (state) {
    state.admin = {}
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
  addAdmin: ({
    commit
  }, admin) => {
    commit('SET_ADMIN', admin)
  },
  adminlogout: ({
    commit
  }) => {
    commit('LOGOUT_ADMIN')
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
  admin: state => state.admin,
  error: state => state.error
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
