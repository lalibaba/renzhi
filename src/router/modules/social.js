import Layout from '@/layout'

export default {
  path: '/social',
  meta: { id: 'social_securitys' },
  component: Layout,
  children: [{
    name: 'social_securitys',
    path: '',
    component: () => { return import('@/views/social/index') },
    meta: { title: '社保', icon: 'table' }
  }]
}
