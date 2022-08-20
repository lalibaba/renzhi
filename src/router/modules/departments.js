import Layout from '@/layout'

export default {
  path: '/departments',
  name: 'departments',
  component: Layout,
  children: [{
    path: '',
    component: () => { return import('@/views/departments/index') },
    meta: { title: '组织架构', icon: 'tree' }
  }]

}
