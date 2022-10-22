import Vue from 'vue'
import VueRouter from 'vue-router'
// import { checkAuth, checkConnectSession } from '@/services/authGuards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'banks',
    component: () => import('@/views/Banks.vue')
  },

  {
    path: '/connect',
    name: 'connect',
    component: () => import('@/views/ConnectBank.vue'),
    // beforeEnter: checkConnectSession
  },

  {
    path: '/success',
    name: 'success',
    component: () => import('@/views/SuccessConnect.vue'),
    // beforeEnter: checkAuth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
