import axios from 'axios'
import { Message } from 'element-ui' // 引入错误提示
import store from '@/store'
import router from '@/router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
const timeout = 10 * 60 * 60
function isCheckOut() {
  return (Date.now() - store.getters.hrsaasTime) / 1000 > timeout
}
// request interceptor
service.interceptors.request.use(config => {
  // 在这个位置需要统一的去注入token
  if (store.getters.token) {
    if (isCheckOut()) {
      store.dispatch('user/logout')
      router.push('/login')
      // Message.error('接口超时')
      return Promise.reject(new Error('接口token超时'))
    }
    // 如果token存在 注入token
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config // 必须返回配置
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) { // 业务成功
    return data
  } else {
    Message.error(message) // 业务报错
    return Promise.reject(new Error(message))
  }
}, (err) => {
  // Message.error(err.message) // 接口报错
  if (err.response && err.response.data && err.response.data.code === 10002) {
    // token失效不处于登录状态
    store.dispatch('user/logout')
    router.push('/login')
  } else {
    Message.error(err.message || '')
  }

  return Promise.reject(err)
})

export default service
