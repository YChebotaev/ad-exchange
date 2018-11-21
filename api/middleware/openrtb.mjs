import { OpenRTB } from '../lib/classes/OpenRTB'
import { createOpenRtb } from '../lib/createOpenRtb.mjs'
import { createRequest } from '../lib/createRequest.mjs'
import { createResponse } from '../lib/createResponse.mjs'
import { respondWithTechnicalError } from '../lib/respondWithTechnicalError.mjs'

export const openRtb = handler => async (ctx, next) => {
  const request = createRequest(ctx)
  const response = await createResponse(request)
  const openRtb = createOpenRtb(request, response)

  try {
    await handler.call(openRtb, openRtb)
  } catch (error) {
    respondWithTechnicalError(ctx, openRtb, error)
  } finally {
    ctx.type = 'application/json'
    ctx.body = openRtb
  }  
}
