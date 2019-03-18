import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import admin from './modules/admin'
import company from './modules/company'
import partner from './modules/partner'
import actions from './actions'
import VuexPersist from 'vuex-persist'
import Cookies from 'js-cookie'

Vue.use(Vuex)

// const vuexLocalStorage = new VuexPersist({
//   key: 'vuex', // The key to store the state on in the storage provider.
//   storage: window.localStorage // or window.sessionStorage or localForage
//   // Function that passes the state and returns the state with only the objects you want to store.
//   // reducer: state => state,
//   // Function that passes a mutation and lets you decide if it should update the state in localStorage.
//   // filter: mutation => (true)
// })
// const inFifteenMinutes = new Date(new Date().getTime() + 60 * 1000)
const vuexCookie = new VuexPersist({
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) => Cookies.set(key, state, {
    expires: 3
  }),
  modules: ['user', 'admin', 'company', 'partner'] // only save user module
})

// const vuexLocal = new VuexPersist({
//   storage: window.localStorage,
// })

export default new Vuex.Store({
  plugins: [vuexCookie.plugin],
  actions,
  modules: {
    user,
    admin,
    company,
    partner
  }
})
