import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'wx',
    component: () => import('../views/wx/wxDemo.vue')
  },
  {
    path: '/jhx',
    name: 'jhxDemo',
    component: () => import('../views/jhx/jhxDemo.vue')
  },
  {
    path: '/ly',
    name: 'lyDemo',
    component: () => import('../views/ly/lyDemo.vue')
  },
  {
    path: '/wl',
    name: 'wlDemo',
    component: () => import('../views/wl/wlDemo.vue')
  },
  {
    path: '/wx',
    name: 'wxDemo',
    component: () => import('../views/wx/wxDemo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
