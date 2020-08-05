const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')

// 首页路由
router.get('/', ctx => {
  ctx.response.type = 'html'
  console.log(path.resolve('./views/index.html'))
  ctx.response.body = fs.createReadStream(ath.resolve('./views/index.html'))
})

module.exports = router
