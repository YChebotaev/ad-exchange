import { RTBGeo } from "./RTBGeo";
import { readConnectionType } from '../lib/readConnectionType'

export class RTBDevice {
  public type: number;
  public ua: string;
  public ifa: string; // What does this mean?
  public dnt: number;
  public lmt: number;
  public make: string;
  public model: string;
  public os: string;
  public osv: string;
  public hwv: string;
  public h: number;
  public w: number;
  public ppi: number;
  public pxratio: number;
  public js: number;
  public lang: string;
  public ip: string;
  public ipv6: string;
  public xff: string;
  public iptr: number;
  public carrier: string;
  public mccmnc: string;
  public mccmncsim: string;
  public contype: number;
  public geofetch: number;
  public geo: RTBGeo;
  public ext: object;

  constructor({
    type,
    ua,
    ifa,
    lmt,
    make,
    model,
    os,
    osv,
    hwv,
    ppi,
    lang,
    ip,
    ipv6,
    xff,
    iptr,
    carrier,
    mccmnc,
    mccmncsim,
    geo,
    ext
  }: {
    type: number,
    ua: string,
    ifa: string,
    lmt: number,
    make: string,
    model: string,
    os: string,
    osv: string,
    hwv: string,
    h: number,
    w: number,
    ppi: number,
    js: number,
    lang: string,
    ip: string,
    ipv6: string,
    xff: string,
    iptr: number,
    carrier: string,
    mccmnc: string,
    mccmncsim: string,
    contype: number,
    geofetch: number,
    geo: RTBGeo,
    ext: object
  }) {
    this.type = type
    this.ua = ua
    this.ifa = ifa
    this.dnt = Number(navigator.doNotTrack)
    this.lmt = lmt // How to get it on browser
    this.make = make // TODO
    this.model = model // TODO
    this.os = os // TODO
    this.osv = osv // TODO
    this.hwv = hwv // TODO
    this.h = screen.availHeight
    this.w = screen.availWidth
    this.ppi = ppi // TODO
    this.pxratio = window.devicePixelRatio
    this.js = 1 // Obvious -)
    this.lang = lang // TODO
    this.ip = ip // Server-side
    this.ipv6 = ipv6 // Server-side
    this.xff = xff // Server-side
    this.iptr = iptr // TODO
    this.carrier = carrier // TODO
    this.mccmnc = mccmnc // TODO
    this.mccmncsim = mccmncsim // TODO
    this.contype = readConnectionType()
    this.geofetch = 0 // TODO
    this.geo = geo // TODO
    this.ext = ext
  }
}
