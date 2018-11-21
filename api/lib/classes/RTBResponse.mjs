import _ from 'lodash'

export class RTBResponse {
  constructor(config) {
    _.assign(this, config)
  }

  setNoBidReason(nbr) {
    this.nbr = nbr
    return this
  }
}
