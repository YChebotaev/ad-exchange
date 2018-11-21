import { generate } from 'shortid'
import { RTBMetric } from './RTBMetric'
import { RTBDeal } from './RTBDeal'
import { RTBPlacement } from './RTBPlacement'

export class RTBItem {
  public id: string;
  public qty: number;
  public seq: number;
  public flr: number;
  public flrcur: string;
  public exp: number;
  public dt: string;
  public dlvy: number;
  public metric: RTBMetric[];
  public deal: RTBDeal[];
  public _private: number;
  public spec: RTBPlacement;
  public ext: object;

  constructor({
    id = generate(),
    qty = 1,
    seq = 0,
    flr = 0,
    flrcur = 'USD',
    exp = 0,
    dt = '',
    dlvy = 0,
    metric = [],
    deal = [],
    _private = 0,
    spec = null,
    ext = {}
  }: {
    id: string,
    qty: number,
    seq: number,
    flr: number,
    flrcur: string,
    exp: number,
    dt: string,
    dlvy: number,
    metric: RTBMetric[],
    deal: RTBDeal[],
    _private: number,
    spec: RTBPlacement,
    ext: object
  }) {
    this.id = id
    this.qty = qty
    this.seq = seq
    this.flr = flr
    this.flrcur = flrcur
    this.exp = exp
    this.dt = dt
    this.dlvy = dlvy
    this.metric = metric
    this.deal = deal
    this._private = _private
    this.spec = spec
    this.ext = ext
  }

  toJSON(): object {
    return this
  }
}
 