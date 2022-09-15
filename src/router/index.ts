import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
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
    component: async () => await import('@/views/exception/404')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
