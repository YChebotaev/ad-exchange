import { generate } from 'shortid'
import { OpenRTB } from './OpenRTB'
import { RTBResponse } from './RTBResponse'
import { RTBRequest } from './RTBRequest'
import { RTBSource } from './RTBSource'
import { RTBItem } from './RTBItem'
import { RTBMetric } from './RTBMetric'
import { RTBDeal } from './RTBDeal'
import { RTBPlacement } from './RTBPlacement'
import { RTBContext } from './RTBContext'
import { RTBSite } from './RTBSite'
import { RTBUser } from './RTBUser'
import { RTBGeo } from './RTBGeo'
import { Sender } from './Sender'
import { RTBDevice } from './RTBDevice';
import { RTBRegs } from './RTBRegs'

export class Impression {
  private openRTB: OpenRTB;
  private element: HTMLElement;

  constructor({ element }: { element: HTMLElement }) {
    this.element = element
    const context = new RTBContext({
      site: new RTBSite(),
      user: new RTBUser({
        id: '', // TODO: To implement
        buyeruid: '', // TODO: To implement
        yob: 0,
        gender: undefined,
        keywords: '',
        consent: '',
        geo: new RTBGeo(),
        data: [],
        ext: {},
      }),
      device: new RTBDevice({
        type: 0,
        ifa: '',
        lmt: 0,
        make: '',
        model: '',
        os: '',
        osv: '',
        hwv: '',
        ppi: 0,
        lang: '',
        ip: '',
        ipv6: '',
        xff: '',
        iptr: 0,
        carrier: '',
        mccmnc: '',
        mccmncsim: '',
        contype: 0,
        geofetch: 0,
        geo: new RTBGeo(),
        ext: {}
      }),
      regs: new RTBRegs({ ext: {} }),
      restrictions: []
    })
    const deal = new RTBDeal({
      id: generate,
      flr: 0,
      flrcur: 'USD',
      at: 0,
      wseat: [],
      wadomain: [],
      ext: {}
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
      context,
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
    const sender = new Sender(this.openRTB, 'http://localhost:3000')
    return sender.send()
      .then(response => {
        this.openRTB.response = response
        return this
      })
  }

  toJSON() {
    return this.openRTB.toJSON()
  }
}
