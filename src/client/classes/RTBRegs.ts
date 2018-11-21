import { readCoppa } from '../lib/readCoppa';
import { readGdrp } from '../lib/readGdrp'

export class RTBRegs {
  public coppa: number;
  public gdrp: number;
  public ext: object;

  constructor({
    ext
  }: {
    ext: object
  }) {
    this.coppa = readCoppa() ? 1 : 0
    this.gdrp = readGdrp() ? 1 : 0
    this.ext = ext
  }
}
