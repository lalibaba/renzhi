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

import { login } from '@/api/user'
import { setToken, getToken, removeToken } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    token: getToken()
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)// tiken存入cookie
    },
    removeToken(state) {
      state.token = null
      removeToken()
    }
  },
  actions: {
    // 通过接口获取token
    // commit setToken
    async login({ commit }, data) {
      const res = await login(data)
      console.log(res)
      commit('setToken', res.data.data)
    }
  }
}
