import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
  // 判断是否有token
  const token = store.getters.token
  if (token) {
    // 获取用户资料
    if (!store.getters.userId) {
      await store.dispatch('user/getUserInfo')
      store.dispatch('permission/filterRoutes', ['settings'])
    }

    // 是否要去登录页。是则跳转到主页，否则按原路由放行
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 是否在白名单，是则按原路由放行，否则去登录页登录
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
