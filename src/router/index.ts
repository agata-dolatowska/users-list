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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
