import Vue from 'vue'
import Router from 'vue-router'
import approvals from './modules/approvals'
import attendances from './modules/attendances'
import departments from './modules/departments'
import employees from './modules/employees'
import permission from './modules/permission'
import salarys from './modules/salarys'
import setting from './modules/setting'
import social from './modules/social'

export const asyncRoutes = [approvals, attendances, departments, employees, permission, salarys, setting, social]
Vue.use(Router)

import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/import',
    component: Layout,
    hidden: true,
    children: [{
      path: '',
      name: 'import',
      component: () => import('@/views/import')
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  }

  // { path: '*', redirect: '/404', hidden: true }

]

const createRouter = () => new Router({
  mode: 'history', // require service support
  base: '/hr',
  scrollBehavior: (to, from, savedPosition) => {
    // console.log(88, savedPosition)
    if (to.path === '/attendances') {
      return { y: 0 }
    }
    return { y: 0 }
  },
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() { // 退出账户时调用，重置路由
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
