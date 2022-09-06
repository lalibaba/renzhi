import Layout from '@/layout'

export default {
  path: '/departments',
  // name: 'departments',
  meta: { id: 'departments' },
  component: Layout,
  children: [{
    path: '',
    name: 'departments',
    component: () => { return import('@/views/departments/index') },
    meta: { title: '组织架构', icon: 'tree' }
  }]

}
