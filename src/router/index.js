/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:09:56 
 * @Last Modified by:   wuhan 
 * @Last Modified time: 2018-09-19 21:09:56 
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const  Msite  =  r => require.ensure([], () => r(require('@/pages/msite/msite')), 'msite')
const  Search  =  r => require.ensure([], () => r(require('@/pages/search/search')), 'search')
const  Order  =  r => require.ensure([], () => r(require('@/pages/order/order')), 'order')
const  Profile  =  r => require.ensure([], () => r(require('@/pages/profile/profile')), 'profile')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'msite',
      component: Msite
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
