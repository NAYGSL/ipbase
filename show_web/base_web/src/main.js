import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import Resource from 'vue-resource'
import '.././public/style.css'
import '.././public/normalize.css'

Vue.config.productionTip = false
Vue.use(Resource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
