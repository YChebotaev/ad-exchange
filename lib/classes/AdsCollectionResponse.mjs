export class AdsCollectionResponse {
  materializeId(ad) {
    ad.id = ad._id
    delete ad._id
    return ad
  }

  constructor(ads, count) {
    this.count = count ? count : ads.length
    this.more = ads.length < count
    this.ads = ads.map(ad => this.materializeId(ad))
  }
}
