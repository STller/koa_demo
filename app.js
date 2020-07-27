const Koa = require('koa')
const logger = require('koa-logger')
const router = require('./routes/index')
const config = require('./config/default')
const mysqlQuery = require('./mysql/index')
const static = require('koa-static')
const path = require('path')
const app = new Koa()

// app.use(async ctx => {
//   const data = await mysqlQuery()
//   ctx.type = 'json'
//   ctx.body = {
//     'code': 200,
//     'data': data,
//     'msg': 'ok'
//   }
// })

// 访问根目录的静态资源
app.use(static(path.join(__dirname)))
  // 路由
  .use(router())
  // 日志输出
  .use(logger())
// 端口监听
app.listen(config.port)

console.log(`listening on port ${config.port}`)