import axios from 'axios'
import { Message } from 'element-ui' // 引入错误提示

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use()

service.interceptors.response.use((response) => {
  const { success, message, data } = response.data
  if (success) { // 业务成功
    return data
  } else {
    Message.error(message) // 业务报错
    return Promise.reject(new Error(message))
  }
}, (err) => {
  Message.error(err.message) // 接口报错
  return Promise.reject(err)
})

export default service
