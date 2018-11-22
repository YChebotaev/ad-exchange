import { Bidder } from '../../lib/classes/Bidder.mjs'

const bidder = new Bidder()

bidder.use(({ request, response }) => {
  console.log('--request--', request)
  console.log('--response--', response)
})

export const impression = bidder.koaMiddleware()
