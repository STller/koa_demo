const Router = require('koa-router')
const router = new Router

router.get('/user', ctx => {
  ctx.body = 'User'
})

module.exports = router