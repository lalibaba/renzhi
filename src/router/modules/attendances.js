import Layout from '@/layout'

export default {
  path: '/attendances',
  // name: 'attendances',
  meta: { id: 'attendances' },
  component: Layout,
  children: [{
    name: 'attendances',
    path: '',
    component: () => { return import('@/views/attendances') },
    meta: { title: '考勤', icon: 'skill' }
  }]

}
