export class RTBSource {
  public tid: string;
  public ts: number;
  public ds: string;
  public dsmap: string;
  public cert: string;
  public digest: string;
  public pchain: string;
  public ext: object;

  constructor({
    tid = '',
    ts = Date.now(),
    ds = '',
    dsmap = '',
    cert = '',
    digest = '',
    pchain = '',
    ext = {}
  }: {
    tid: string
    ts: number
    ds: string
    dsmap: string
    cert: string
    digest: string
    pchain: string
    ext: object
  }) {
    this.tid = tid
    this.ts = ts
    this.ds = ds
    this.dsmap = dsmap
    this.cert = cert
    this.digest = digest
    this.pchain = pchain
    this.ext = ext
  }

  toJSON(): object {
    return this
  }
}
