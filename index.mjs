import path from 'path'
import Koa from 'koa'
import koaStatic from 'koa-static'
import body from 'koa-body'
import cors from 'koa-cors'
import compress from 'koa-compress'
import api from './api'

const server = new Koa()

server.use(body())
server.use(cors())
server.use(api.routes())
server.use(api.allowedMethods())
server.use(koaStatic(
  path.resolve(process.cwd(), 'public')
))
server.use(compress())

export default server