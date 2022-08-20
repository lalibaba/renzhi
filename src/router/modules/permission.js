import Layout from '@/layout'

export default {
  path: '/permission',
  name: 'permission',
  component: Layout,
  children: [{
    path: '',
    component: () => { return import('@/views/permission/index') },
    meta: { title: '权限管理', icon: 'lock' }
  }]

}
