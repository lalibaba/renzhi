import Layout from '@/layout'

export default {
  path: '/salarys',
  // name: 'salarys',
  meta: { id: 'salarys' },
  component: Layout,
  children: [{
    path: '',
    component: () => { return import('@/views/salarys/index') },
    meta: { title: '工资', icon: 'money' }
  }]

}
