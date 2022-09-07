const Koa = require('koa')
const serve = require('koa-static');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

const app = new Koa();  //实例化一个wed服务

app.use(historyApiFallback({  //中间件有顺序
  whiteList: ['/prod-api']
}));  // 这里的whiteList是 白名单的意思，不要处理/prod-api（生产环境的base_url）
app.use(serve(__dirname + "/public")); //将public下的代码静态化
const path = require('path')


app.listen(3333, () => {
  console.log('人资项目启动,访问地址http://localhost:3333')
})


const proxy = require('koa2-proxy-middleware')

app.use(proxy({
  targets: {
    // (.*) means anything
    '/prod-api/(.*)': { //代理以斜杠prod-api开头的地址
      target: 'http://42.192.129.12:3001/api', //后端服务器地址
      changeOrigin: true,
      pathRewrite: {     //重写路径
        '/prod-api': ""  //去除/prod-api（替换成空字符）
      }
    }
  }
}))