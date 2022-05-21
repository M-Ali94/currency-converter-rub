import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap.bundle.min"
import store from './store'

import VueRouter from 'vue-router'
import Router from './router'


Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes: Router
})

new Vue({
  router:router,
  store,
  render: h => h(App),
}).$mount('#app')
