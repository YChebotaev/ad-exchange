import { OpenRTB } from './OpenRTB'
import { RTBResponse } from './RTBResponse'

export class Sender {
  private openRtb: OpenRTB;
  private endpointHost: string;

  constructor(openRtb: OpenRTB, endpointHost: string) {
    this.openRtb = openRtb
    this.endpointHost = endpointHost
  }

  send(): Promise<RTBResponse> {
    const url = new URL('/api/impression', this.endpointHost)
    return fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Openrtb-Version': this.openRtb.getVersion()
      },
      body: JSON.stringify(this.openRtb, null, 2)
    }).then(() => void(null))
  }
}
