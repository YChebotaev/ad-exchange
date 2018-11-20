import { generate } from 'shortid'
import { RTBSource } from './RTBSource'
import { RTBItem } from './RTBItem'
import { RTBSite } from './RTBSite'

export class RTBRequest {
  public id: string
  public test: number
  public tmax: number
  public at: number
  public cur: string[]
  public seat: string[]
  public wseat: number
  public cdata: string
  public source: RTBSource
  public item: RTBItem[]
  public _package: number
  public context: object
  public ext: object

  constructor({
    id = generate(),
    test = 0,
    tmax = 0,
    at = 2,
    cur = ['USD'],
    seat = [],
    wseat = 1,
    cdata = '',
    source = null,
    item = [],
    _package = 0,
    context = {},
    ext = {}
  }: {
    id: string,
    test: number,
    tmax: number,
    at: number,
    cur: string[],
    seat: string[],
    wseat: number,
    cdata: string,
    source: RTBSource,
    item: RTBItem[],
    _package: number,
    context: RTBSite,
    ext: object
  }) {
    this.id = id
    this.test = test
    this.tmax = tmax
    this.at = at
    this.cur = cur
    this.seat = seat
    this.wseat = wseat
    this.cdata = cdata
    this.source = source
    this.item = item
    this._package = _package
    this.context = context
    this.ext = ext
  }

  toJSON(): object {
    return this
  }
}
