import Router from 'koa-router'
import { impression } from './impression.mjs'
import { findAds, createAd } from './ads.mjs'

const v1 = new Router({
  prefix: '/api/v1'
})

v1.post('/impression', impression)

v1.get('/bidder/:bidderId/ads', findAds)
v1.post('/bidder/:bidderId/ads', createAd)

export default v1
