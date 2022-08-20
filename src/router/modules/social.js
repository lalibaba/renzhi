import Layout from '@/layout'

export default {
  path: '/social',
  name: 'social',
  component: Layout,
  children: [{
    path: '',
    component: () => { return import('@/views/social/index') },
    meta: { title: '社保', icon: 'table' }
  }]
}