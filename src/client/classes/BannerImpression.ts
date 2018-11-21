import { Impression } from './Impression'

export class BannerImpression extends HTMLElement {
  private impression: Impression;

  connectedCallback() {
    console.log('BannerImpression#connectedCallback')
    this.style.display = 'inline-block'
    this.style.width = this.getAttribute('width')
    this.style.height = this.getAttribute('height')
    // ---------------------------
    this.impression = new Impression({
      element: this
    })
    this.impression.send()
  }

  disconnectedCallback() {
    console.log('BannerImpression#disconnectedCallback')
  }

  adoptedCallback() {
    console.log('BannerImpression#adoptedCallback')
  }

  attributeChangedCallback() {
    console.log('BannerImpression#attributeChangedCallback')
  }
}
