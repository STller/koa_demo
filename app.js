const Koa = require('koa')
const config = require('./config/default')
const mysqlQuery = require('./mysql/index')

const app = new Koa()

app.use(async ctx => {
  const data = await mysqlQuery()
  ctx.response.type = 'json'
  ctx.response.body = {
    'code': 200,
    'data': data,
    'msg': 'ok'
  }
})

app.listen(config.port)

console.log(`listening on port ${config.port}`)