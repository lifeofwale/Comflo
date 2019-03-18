// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import Datepicker from 'vuejs-datepicker'
import Notify from 'vue2-notify'
import vSelect from 'vue-select'
import store from './store/store'
// Import component
import VueLoading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.min.css'

import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'

Vue.use(Tooltip)
Vue.use(VueRouter)
Vue.use(Notify)
Vue.use(VueLoading)
Vue.component('datepicker', Datepicker)
Vue.component('v-select', vSelect)
Vue.component('Loading', VueLoading)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
