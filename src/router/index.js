import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import Msite from '@/pages/msite/msite'
const  Msite  =  r => require.ensure([], () => r(require('@/pages/msite/msite')), 'msite')
const  Search  =  r => require.ensure([], () => r(require('@/pages/msite/msite')), 'Search')
const  Order  =  r => require.ensure([], () => r(require('@/pages/msite/msite')), 'Order')
const  Profile  =  r => require.ensure([], () => r(require('@/pages/msite/msite')), 'Profile')

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
