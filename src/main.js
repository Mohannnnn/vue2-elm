/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-11-20 21:07:21 
 * @Last Modified by:   wuhan 
 * @Last Modified time: 2018-11-20 21:07:21 
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './config/rem'
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'

// Vue.use(Mint);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',
  render : h => h(App)
})
