import _ from 'lodash'

export class RTBRequest {
  constructor(koaContext) {
    console.log('--koa-context--req-body--', koaContext)
    _.assign(this, koaContext.req.body)
  }
}
