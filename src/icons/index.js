import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component
// import { login } from '@/api/user'

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
// node.js的require模块中的context是批量导入文件路径方法
// req=require.context('查找路径'，是否深层查找，正则匹配文件后缀名)
console.log(req.keys())// req是一个方法，.keys() 得到所有找到的文件路径
console.log(req('./dashboard.svg'))// 根据路径找到对应的模块
// [1,2,3,4].map(fn) 相当于[1,2,3,4].map(ele=>fn(ele))
// 定义导入svg文件模块方法
const requireAll = requireContext => requireContext.keys().map(requireContext)
// requireAll(req){
//   return req.keys().map(req)
// }
requireAll(req)
console.log(requireAll(req))
