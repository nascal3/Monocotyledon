import Vue from 'vue'
import VueRouter from 'vue-router'

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
    component: () => import('@/views/ConnectBank.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
