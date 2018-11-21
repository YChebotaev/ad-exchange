import { RTBRequest } from './RTBRequest'
import { RTBResponse } from './RTBResponse';

export class OpenRTB {
  public ver: string;
  public domainspec: string;
  public domainver: string;
  public request: RTBRequest;
  public response: RTBResponse;

  constructor({
    ver = '3.0',
    domainspec = 'adcom',
    domainver = '',
    request = null,
    response = null
  }: {
    ver: string,
    domainspec: string,
    domainver: string,
    request: RTBRequest,
    response: RTBResponse
  }) {
    this.ver = ver
    this.domainspec = domainspec
    this.domainver = domainver
    this.request = request
    this.response = response
  }

  getVersion() {
    return this.ver
  }

  toJSON(): object {
    return this
  }
}
