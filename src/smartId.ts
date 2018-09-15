import { Config } from './config'
import { Auth } from './auth';

export class SmartId {
  private config: Config

  constructor(config: Config) {
    this.config = config
  }

  auth(country: string, idNumber: string, displayText: string): Object {
    if (!country || !idNumber) throw new TypeError('Missing mandatory parameters')

    let auth = new Auth(this.config, country, idNumber)
    return auth.auth(displayText)
  }
}