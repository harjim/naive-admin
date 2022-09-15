import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/index'
import Login from '@/views/exception/Login'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout,
    meta: {}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {}
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/exception/404')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
