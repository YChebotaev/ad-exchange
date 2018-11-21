import { assign } from 'lodash'

export class RTBDeal {
  constructor(config: object) {
    assign(this, config)
  }

  toJSON(): object {
    return this
  }
}
