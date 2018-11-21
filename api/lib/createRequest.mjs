import { RTBRequest } from "./classes/RTBRequest.mjs";

export const createRequest = koaContext =>
  new RTBRequest(koaContext.request.body.request)
