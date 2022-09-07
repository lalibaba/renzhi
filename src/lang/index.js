import Vue from 'vue' // 引入Vue
import VueI18n from 'vue-i18n' // 引入国际化的包
import Cookie from 'js-cookie' // 引入cookie包
import elementEN from 'element-ui/lib/locale/lang/en' // 引入饿了么的英文包
import elementZH from 'element-ui/lib/locale/lang/zh-CN' // 引入饿了么的中文包
import customEN from './en'
import customZH from './zh'
Vue.use(VueI18n) // 全局注册国际化包
export default new VueI18n({
  locale: Cookie.get('language') || 'zh', // 从cookie中获取语言类型 获取不到就是中文
  messages: {
    en: {
      ...elementEN, // 将饿了么的英文语言包引入
      ...customEN
    },
    zh: {
      ...elementZH, // 将饿了么的中文语言包引入
      ...customZH
    }
  }
})
// npm install vue-i18n
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n) // 全局注册国际化包
// import elementEN from 'element-ui/lib/locale/lang/en' // 引入饿了么的英文包
// import elementZH from 'element-ui/lib/locale/lang/zh-CN' // 引入饿了么的中文包
// import customEN from './en'
// import customZH from './zh'
// export default new VueI18n({
//   locale: Cookie.get('language') || 'zh', // 从cookie中获取语言类型 获取不到就是中文
//   messages: {
//     en: {
//       ...elementEN, // 将饿了么的英文语言包引入
//       ...customEN
//     },
//     zh: {
//       ...elementZH, // 将饿了么的中文语言包引入
//       ...customZH
//     }
//   }
// })
// 使用$t('route.xxx')使用对应的语言文字
// 使用$tc('route.xxx',1)使用对应的第几个语言文字（语言包中定义：xxx='he|hell|hello'）
