import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

import Head from '@/components/head/Head'
Vue.component('Head',Head)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
