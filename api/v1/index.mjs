import Router from 'koa-router'
import { impression } from './impression.mjs'

const v1 = new Router({
  prefix: '/api/v1'
})

v1.post('/impression', impression)

export default v1
