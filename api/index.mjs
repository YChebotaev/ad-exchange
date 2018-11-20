import Router from 'koa-router'
import { impression } from './impression'

const api = new Router({
  prefix: '/api'
})

api.post('/impression',  impression)

export default api
