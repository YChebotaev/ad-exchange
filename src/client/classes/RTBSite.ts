import { RTBDistributionChannel } from './RTBDistributionChannel'
import { readHasPrivacyPolicy } from '../lib/readHasPrivacyPolicy'
import { readSiteKeywords } from '../lib/readSiteKeywords'
import { readSiteIsAmp } from '../lib/readSiteIsAmp'

export class RTBSite extends RTBDistributionChannel {
  public domain: string;
  public cat: string[];
  public sectcat: string[];
  public pagecat: string[];
  public cattax: number;
  public privpolicy: number;
  public keywords: string;
  public page: string;
  public ref: string;
  public search: string;
  public mobile: number;
  public amp: number;

  constructor() {
    super({
      id: '', // TODO
      name: '', // TODO
      pub: null, // TODO
      content: null // TODO
    })
    const { hostname, pathname, hash } = window.location
    this.domain = hostname
    this.cat = [] // TODO
    this.sectcat = [] // TODO
    this.pagecat = [] // TODO
    this.cattax = 0 // TODO
    this.privpolicy = readHasPrivacyPolicy() ? 1 : 0
    this.keywords = readSiteKeywords().join(', ')
    this.page = pathname + hash
    this.ref = document.referrer
    this.search = '' // TODO: How to implement this?
    this.mobile = 0 // TODO: How to implement this?
    this.amp = readSiteIsAmp() ? 1 : 0
  }
}
