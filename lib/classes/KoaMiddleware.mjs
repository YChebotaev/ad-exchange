import shortid from 'shortid'
import { OpenRTB } from './OpenRTB';
import { RTBRequest } from './RTBRequest'
import { RTBResponse } from './RTBResponse'
import debug from 'debug'

export class KoaMiddleware {
  constructor({ bidder }) {
    this.debug = debug('KoaMiddleware')
    this.bidder = bidder
  }

  seatbidsForRequest(rtbRequest) {
    return this.bidder.getSeatbids(rtbRequest)
  }
  
  createRequest(koaContext) {
    return new RTBRequest(koaContext.request.body.request)
  }
  
  async createResponse(rtbRequest) {
    return new RTBResponse({
      id: rtbRequest.id,
      bidid: shortid.generate(),
      cur: 'USD', // Only USD for now
      cdata: '', // Not supported right now
      seatbid: await this.seatbidsForRequest(rtbRequest),
      ext: {}
    })
  }

  createOpenRtb(request, response) {
    return new OpenRTB({
      ver: '3.0',
      domainspec: 'adcom',
      domainver: '1.0',
      request,
      response
    })
  }

  respondWithTechnicalError(ctx, openRtb, error) {
    ctx.status = 204
    ctx.message = error.message
    openRtb.response.setNoBidReason(1 /* Technical Error */)
  }

  async handler(ctx) {
    const request = this.createRequest(ctx)
    const response = await this.createResponse(request)
    const openRtb = this.createOpenRtb(request, response)

    try {
      this.bidder.forEachInterceptor(interceptor => {
        interceptor.call(this.bidder, openRtb)
      })
    } catch (error) {
      this.debug('KoaMiddleware#handler', error)
      this.respondWithTechnicalError(ctx, openRtb, error)
    } finally {
      ctx.type = 'application/json'
      ctx.body = openRtb
    }
  }
}
