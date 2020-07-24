const Router = require('koa-router')
const router = new Router()

router.get('/home', ctx => {
  ctx.body = 'Home'
})

module.exports = router
