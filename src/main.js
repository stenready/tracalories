import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import $ from 'jquery'
global.$ = $

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import 'materialize-css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
