const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

// 首页路由
router.get('/', ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./views/index.html')
})

app.use(router.routes())

io.on('connection', socket => {
  // console.log('user connected')
  socket.on('from client message', msg => {
    console.log(`message: ${msg}`)
    io.emit('from server', msg)
  })
  socket.on('disconnect', () => {
    // console.log('disconnect')
  })
})

let cnt = 0
setInterval(() => {
  io.emit('from server', cnt++)
  // console.log(cnt)
}, 1000);

server.listen(3000, () => {
  console.log('listening on : 3000')
})