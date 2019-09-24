
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/index.js'

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
