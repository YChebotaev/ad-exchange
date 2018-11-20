import { generate } from 'shortid'
import { OpenRTB } from './OpenRTB'
import { RTBResponse } from './RTBResponse'
import { RTBRequest } from './RTBRequest';
import { RTBSource } from './RTBSource';
import { RTBItem } from './RTBItem';
import { RTBMetric } from './RTBMetric';
import { RTBDeal } from './RTBDeal';
import { RTBPlacement } from './RTBPlacement';

export class Impression {
  private openRTB: OpenRTB;
  private element: HTMLElement;

  constructor({ element }: { element: HTMLElement }) {
    this.element = element
    const deal = new RTBDeal({
      id: generate,
      flr: 0,
      flrcur: 'USD',
      at: 0,
      wseat: [],
      wadomain: [],
      ext: []
    })
    const spec = new RTBPlacement({})
    const item = new RTBItem({
      id: generate(),
      qty: 1,
      seq: 0,
      flr: 0,
      flrcur: 'USD',
      exp: 0,
      dt: '',
      dlvy: 0,
      metric: [],
      deal: [
        deal
      ],
      _private: 0,
      spec,
      ext: {}
    })
    const source = new RTBSource({
      tid: '',
      ts: Date.now(),
      ds: '',
      dsmap: '',
      cert: '',
      digest: '',
      pchain: '',
      ext: {}
    })
    const request = new RTBRequest({
      id: generate(),
      test: 0,
      tmax: 0,
      at: 2,
      cur: ['USD'],
      seat: [],
      wseat: 1,
      cdata: '',
      source,
      item: [
        item
      ],
      _package: 0,
      context: {},
      ext: {}
    })
    this.openRTB = new OpenRTB({
      ver: '3.0',
      domainspec: 'adcom',
      domainver: '',
      request,
      response: null
    })
  }

  async send() {
    return fetch('http://localhost:3000/api/impression', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this, null, 2)
    })
      .then(res => res.json())
      .then(response => {
        this.openRTB.response = new RTBResponse(response)
        console.log(this.openRTB)
        return this
      })
  }

  toJSON() {
    return this.openRTB.toJSON()
  }
}
