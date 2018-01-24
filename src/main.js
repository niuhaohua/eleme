// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import ElementUI from 'element-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/api'
import api2 from './api/api2'
// import Swiper from 'vue-swiper'
// import scroll from './directive/scroll'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
// Vue.use(axios)
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$api2 = api2
Vue.use(MintUI)
Vue.use(ElementUI)
// Vue.use(Swiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
