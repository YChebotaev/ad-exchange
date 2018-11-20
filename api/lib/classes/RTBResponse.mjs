import shortid from 'shortid'

export class RTBResponse {
  constructor(rtbRequest) {
    this.id = rtbRequest.id
    this.bidid = shortid.generate()
  }
}
