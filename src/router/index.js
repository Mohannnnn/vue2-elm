import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/msite/msite'

Vue.use(Router)

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
    }
  ]
})
