import { adsCollection } from '../../connection.mjs'
import { AdsCollectionResponse } from '../../lib/classes/AdsCollectionResponse.mjs'

export const findAds = async ctx => {
  const { bidderId } = ctx.params

  const {
    auditStart = 0,
    auditEnd = Date.now()
  } = ctx.request.query

  const ads = await (await adsCollection).find({
    'audit.lastmod': {
      $gt: auditStart,
      $lt: auditEnd
    }
  }).toArray()

  const count = await (await adsCollection).count({})

  ctx.body = new AdsCollectionResponse(ads, count)
}

export const createAd = async ctx => {
  const { bidderId } = ctx.params

  const ad = ctx.request.body

  const audit = {
    status: 1,
    init: Date.now(),
    lastmod: Date.now()
  }

  const { ops } = await (await adsCollection).insertOne({
    ...ad,
    audit
  })

  ctx.body = new AdsCollectionResponse(ops)
}
