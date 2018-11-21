import Router from 'koa-router'
import { openRtb } from "./middleware/openrtb.mjs";
import { impression } from './impression'

const api = new Router({
  prefix: '/api'
})

api.post('/impression', openRtb(impression))

export default api
