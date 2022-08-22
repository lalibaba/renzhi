import Layout from '@/layout'

export default {
  path: '/approvals',
  // name: 'approvals',
  component: Layout,
  children: [{
    path: '',
    component: () => { return import('@/views/approvals') },
    meta: { title: '审批', icon: 'tree-table' }
  }]

}
