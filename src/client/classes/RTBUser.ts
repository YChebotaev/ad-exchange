import { RTBGeo } from './RTBGeo'
import { RTBData } from './RTBData'

export class RTBUser {
  public id: string;
  public buyeruid: string;
  public yob: number;
  public gender: number | undefined;
  public keywords: string;
  public consent: string;
  public geo: RTBGeo;
  public data: RTBData[];
  public ext: object;

  constructor({
    id,
    buyeruid,
    yob,
    gender,
    keywords,
    consent,
    geo,
    data,
    ext
  }: {
    id: string;
    buyeruid: string;
    yob: number;
    gender: number;
    keywords: string;
    consent: string;
    geo: RTBGeo;
    data: RTBData[];
    ext: object;
  }) {
    this.id = id
    this.buyeruid = buyeruid
    this.yob = yob
    this.gender = gender
    this.keywords = keywords
    this.consent = consent
    this.geo = geo
    this.data = data
    this.ext = ext
  }
}
