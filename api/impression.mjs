import shortid from 'shortid'
import { openRtb } from "./middleware/openrtb.mjs";

export const impression = openRtb(({ request, response }) => {
  console.log(request, response)
})

/*
(ctx, next) => {
  ctx.body = {
    openrtb: {
      ver: "3.0",
      domainver: "1.0",
      response: {
        id: ctx.request.body.request.id,
        bidid: shortid.generate(),
        nbr: undefined,
        cur: 'USD',
        cdata: '',
        seatbid: [],
        ext: {}
      }
    }
  }
  next()
}
*/
