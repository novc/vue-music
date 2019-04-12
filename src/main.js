
import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
// import router from './router'
// import store from './store'
import 'common/stylus/index.styl'
// Vue.config.productionTip = false

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
