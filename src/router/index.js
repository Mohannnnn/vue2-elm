/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:09:56 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-11 20:08:03
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const  msiteV  =  r => require.ensure([], () => r(require('@/pages/msite/index')), 'msite');
const  searchV  =  r => require.ensure([], () => r(require('@/pages/search/index')), 'search');
const  orderV  =  r => require.ensure([], () => r(require('@/pages/order/index')), 'order');
const  profileV  =  r => require.ensure([], () => r(require('@/pages/profile/index')), 'profile');

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'msite',
      component: msiteV
    },
    {
      path: '/search',
      name: 'search',
      component: searchV
    },
    {
      path: '/order',
      name: 'order',
      component: orderV
    },
    {
      path: '/profile',
      name: 'profile',
      component: profileV
    }
  ]
})
