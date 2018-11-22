import path from 'path'
import Koa from 'koa'
import body from 'koa-body'
import cors from 'koa-cors'
import compress from 'koa-compress'
import v1 from './api/v1'

const server = new Koa()

server.use(body())
server.use(cors())
server.use(v1.routes())
server.use(v1.allowedMethods())
server.use(compress())

export default server
