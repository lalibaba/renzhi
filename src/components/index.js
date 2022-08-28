// import PageTools from './PageTools'

// // export default {
// //   install(Vue) {
// //     Vue.component('PageTools', PageTools)
// //   }
// // }

// export default (Vue) => {
//   Vue.component('PageTools', PageTools)
// }

// 自动批量注册组件
// require.context('查找路径', 是否查找子目录, 文件后缀名)
const reqCommponents = require.context('./', true, /\.vue$/)
//  reqCommponents.keys()获取所有组件路径
const componentList = reqCommponents.keys().map(ele => reqCommponents(ele))
// reqCommponents（路径） 获取所有组件对象
// .map(ele => reqCommponents(ele))可简写成.map(reqCommponents) /map参数是函数，并且返回的是该函数处理的值
console.log(componentList)
export default (Vue) => {
  componentList.forEach(ele => {
    // 注册组件
    Vue.component(ele.default.name, ele.default)
  })
}

