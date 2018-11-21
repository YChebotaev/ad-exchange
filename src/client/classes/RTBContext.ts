import { RTBSite } from './RTBSite'
import { RTBUser } from './RTBUser'
import { RTBDevice } from './RTBDevice'
import { RTBRegs } from './RTBRegs'
import { RTBRestriction } from './RTBRestriction'

export class RTBContext {
  public site: RTBSite;
  public user: RTBUser;
  public device: RTBDevice;
  public regs: RTBRegs;
  public restrictions: RTBRestriction[];

  constructor({
    site,
    user,
    device,
    regs,
    restrictions
  }: {
    site: RTBSite,
    user: RTBUser,
    device: RTBDevice,
    regs: RTBReg[],
    restrictions: RTBRestriction[]
  }) {
    this.site = site
    this.user = user
    this.device = device
    this.regs = regs
    this.restrictions = restrictions
  }
}
