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

import { getUserInfo, login } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {}
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
    }

  },
  actions: {
    // 通过接口获取token
    // commit setToken
    async login({ commit }, data) {
      const res = await login(data)
      console.log(res)
      commit('setToken', res)
    },

    // 获取用户信息
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      commit('setUserInfo', res)
    }
  }
}
