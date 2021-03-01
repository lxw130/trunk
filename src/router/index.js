import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: 'index',
    // children: [
    //   {
    //   path: 'index',
    //   component: () =>
    //     import('@/views/Index'),
    //   name: 'index'
    // },
    // {
    //   path: 'site',
    //   component: () =>
    //     import('@/views/Site'),
    //   name: 'site'
    // },
    // {
    //   path: 'batterypack',
    //   component: () =>
    //     import('@/views/Batterypack'),
    //   name: 'batterypack'
    // },
    // {
    //   path: 'batterycell',
    //   component: () =>
    //     import('@/views/Batterycell'),
    //   name: 'batterycell'
    // },
    // {
    //   path: 'statistics',
    //   component: () =>
    //     import('@/views/Statistics'),
    //   name: 'statistics'
    // },
    // ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
