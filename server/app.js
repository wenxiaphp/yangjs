const path = require('path')

const AV = require('leanengine')
const Koa = require('koa')
const Router = require('koa-router')
const statics = require('koa-static')
const bodyParser = require('koa-bodyparser')

// 加载云函数定义，你可以将云函数拆分到多个文件方便管理，但需要在主文件中加载它们
require('./cloud')

const app = new Koa()
const router = new Router()

app.use(AV.Cloud.CookieSession({ framework: 'koa', secret: 'my secret', maxAge: 3600000, fetchUser: true }))

// 设置静态资源目录
app.use(statics(path.join(__dirname, '../client/dist')))

// 加载云引擎中间件
app.use(AV.koa())

app.use(bodyParser())

// 可以将一类的路由单独保存在一个文件中
app.use(require('./routes/hello-world').routes())

module.exports = app
