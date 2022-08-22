import Layout from '@/layout'

export default {
  path: '/setting',
  // name: 'setting',
  component: Layout,
  children: [{
    path: '',
    component: () => { return import('@/views/setting/index') },
    meta: { title: '设置', icon: 'setting' }
  }]

}
