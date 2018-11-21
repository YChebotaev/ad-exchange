export const respondWithTechnicalError = (ctx, openRtb, error) => {
  ctx.status = 204
  ctx.message = error.message
  openRtb.response.setNoBidReason(1 /* Technical Error */)
}