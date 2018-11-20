import path from 'path'
import Koa from 'koa'
import koaBody from 'koa-body'
import koaStatic from 'koa-static'
import api from './api'

const server = new Koa()

server.use(koaBody())
server.use(api.routes())
server.use(koaStatic(
  path.resolve(process.cwd(), 'public')
))

export default server