
import router, { asyncRoutes, constantRoutes } from '@/router'

const state = {
  routes: constantRoutes
}

const mutations = {
  setRoutes(state, matchRoutes) {
    state.routes = [...constantRoutes, ...matchRoutes]
  }
}

const actions = {
  filterRoutes(context, menus) {
    const routes = asyncRoutes.filter(ele => menus.includes(ele.meta.id)) // 筛选该角色有的权限
    context.commit('setRoutes', routes) // 储存权限对应的路由
    router.addRoutes(routes) // 给路由配置权限对应的路由
    // vue=router中的router.addRoutes()方法后面废弃了，只能用router.addRoute
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
