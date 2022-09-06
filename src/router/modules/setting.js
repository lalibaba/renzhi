import Layout from '@/layout'

export default {
  path: '/setting',
  meta: { id: 'settings' },
  component: Layout,
  children: [{
    name: 'setting',
    path: '',
    component: () => { return import('@/views/setting/index') },
    meta: { title: '设置', icon: 'setting' }
  }]

}
