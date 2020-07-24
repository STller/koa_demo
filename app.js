const Koa = require('koa')
const logger = require('koa-logger')
const router = require('./routes/index')
const config = require('./config/default')
const mysqlQuery = require('./mysql/index')
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

app.listen(config.port)
app.use(router())
  .use(logger())

console.log(`listening on port ${config.port}`)