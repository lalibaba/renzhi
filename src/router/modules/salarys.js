import Layout from '@/layout'

export default {
  path: '/salarys',
  meta: { id: 'salarys' },
  component: Layout,
  children: [{
    name: 'salarys',
    path: '',
    component: () => { return import('@/views/salarys/index') },
    meta: { title: '工资', icon: 'money' }
  }]

}
