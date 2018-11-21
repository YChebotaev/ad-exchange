import { OpenRTB } from './classes/OpenRTB'

export const createOpenRtb = (request, response) =>
  new OpenRTB({
    ver: '3.0',
    domainspec: 'adcom',
    domainver: '1.0',
    request,
    response
  })
