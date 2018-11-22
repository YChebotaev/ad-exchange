import { KoaMiddleware } from './KoaMiddleware'

export class Bidder {
  constructor() {
    this.interceptors = []
  }

  getSeatbids(rtbRequest) {
    return []
  }

  use(...interceptors) {
    this.interceptors.push(...interceptors)
  }

  forEachInterceptor(callback, thisArg = this) {
    this.interceptors.forEach(callback, thisArg)
    return this
  }

  koaMiddleware(config) {
    const middleware = new KoaMiddleware({
      ...config,
      bidder: this
    })
    return ctx => middleware.handler(ctx)
  }
}
