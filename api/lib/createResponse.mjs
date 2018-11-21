import shortid from 'shortid'
import { RTBResponse } from "./classes/RTBResponse.mjs"
import { seatbidsForRequest } from './seatbidsForRequest.mjs'

export const createResponse = async rtbRequest =>
  new RTBResponse({
    id: rtbRequest.id,
    bidid: shortid.generate(),
    cur: 'USD', // Only USD for now
    cdata: '', // Not supported right now
    seatbid: await seatbidsForRequest(rtbRequest),
    ext: {}
  })
