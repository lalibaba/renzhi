import Layout from '@/layout'

export default {
  path: '/employees',
  // name: 'employees',
  component: Layout,
  children: [{
    path: '',
    component: () => { return import('@/views/employees') },
    meta: { title: '员工', icon: 'people' }
  },

  {
    path: 'detail/:id', // params 传参 动态路由传参
    component: () => import('@/views/employees/detail'),
    hidden: true, // 不在左侧菜单显示
    meta: {
      title: '员工详情' // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
    }
  },

  {
    path: 'print/:id', // params 传参 动态路由传参
    component: () => import('@/views/employees/print'),
    hidden: true, // 不在左侧菜单显示
    meta: {
      title: '打印', // 标记当前路由规则的中文名称 后续在做左侧菜单时 使用
      icon: 'people'
    }
  }]

}
