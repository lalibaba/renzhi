// import { login } from '@/api/user'
// export default {
//   namespaced: true,
//   state: {
//     token: null
//   },
//   mutations: {
//     setToken(state, token) {
//       state.token = token
//     }
//   },
//   actions: {
//     async login({ commit }, data) {
//       const res = await login(data)
//       console.log(res)
//       commit('setToken', res.data.data)
//     }

//   }
// }

import { getUserInfo, login, getUserDetailById } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {},
    hrsaasTime: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)// tiken存入cookie
    },
    removeToken(state) {
      state.token = null
      removeToken()
    },
    setUserInfo(state, userInfo) {
      state.userInfo = JSON.parse(JSON.stringify(userInfo))
    },
    removeUserInfo(state) {
      state.userInfo = {}
    },
    getHrsaasTime(state, time) {
      state.hrsaasTime = time
    }
  },
  actions: {
    // 通过接口获取token
    // commit setToken
    async login({ commit }, data) {
      const res = await login(data)
      // console.log(res)
      commit('getHrsaasTime', +new Date())
      commit('setToken', res)
    },
    async logout({ commit }) {
      commit('removeToken')
    },

    // 获取用户信息
    async getUserInfo({ commit }) {
      const result = await getUserInfo() // result就是用户的基本资料
      const baseInfo = await getUserDetailById(result.userId) // 为了获取头像
      const baseResult = { ...result, ...baseInfo } // 将两个接口结果合并
      // 此时已经获取到了用户的基本资料 迫不得已 为了头像再次调用一个接口
      commit('setUserInfo', baseResult) // 提交mutations
      // 加一个点睛之笔  这里这一步，暂时用不到，但是请注意，这给我们后边会留下伏笔
      return baseResult
    }
  }
}
