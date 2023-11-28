import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UsersView from '../views/UsersView.vue'
import PageSettings from '@/views/PageSettings.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: UsersView
  },
  {
    path: '/settings',
    name: 'PageSettings',
    component: PageSettings
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
