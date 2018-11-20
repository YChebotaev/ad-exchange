import { OpenRTB } from '../lib/classes/OpenRTB'
import { RTBRequest } from '../lib/classes/RTBRequest'
import { RTBResponse } from '../lib/classes/RTBResponse'
import { inspect } from 'util'

export const openRtb = handler => async (ctx, next) => {
  const request = new RTBRequest(ctx)
  const response = new RTBResponse(request)
  const openRtb = new OpenRTB({
    ver: '3.0',
    domainspec: 'adcom',
    domainver: '1.0',
    request,
    response
  })
  console.log(inspect(openRtb))
  try {
    await handler(openRtb)
  } catch (error) {
    openRtb.response.setNoBidReason(1 /* Technical Error */)
    ctx.status = 500
    ctx.message = error.message
    ctx.type = 'application/json'
    ctx.body = openRtb
    next()
  }
}
