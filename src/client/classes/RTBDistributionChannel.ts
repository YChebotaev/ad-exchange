import { RTBPublisher } from './RTBPublisher'
import { RTBContent } from './RTBContent'

export class RTBDistributionChannel {
  public id: string;
  public name: string;
  public pub: RTBPublisher;
  public content: RTBContent;
  
  constructor({
    id,
    name,
    pub,
    content
  }: {
    id: string,
    name: string,
    pub: RTBPublisher,
    content: RTBContent
  }) {
    this.id = id
    this.name = name
    this.pub = pub
    this.content = content
  }
}
