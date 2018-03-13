// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Analytics from '@/utils/analytics'
import 'semantic.css'
import '@/styles/nprogress.css'
import App from './App'
import router from './router'

Vue.use(VueResource)

Analytics.init()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
