import { Config } from './config'
import { Request } from './request'
import Axios from 'axios'
import Crypto from 'crypto'

export class Auth {
  private config: Config
  private request: Request
  private country: string
  private idNumber: string

  constructor (config: Config, country: string, idNumber: string) {
    this.config = config
    this.request = new Request()
    this.request.country = country.toUpperCase()
    this.request.idNumber = idNumber
  }

  public async auth (displayText: string): Promise<Object> {
    let buf = await Crypto.randomBytes(64)
    let digest = await Crypto.createHash('sha512').update(buf).digest('base64')
    let tst = await Axios.post(
      this.config.baseURL + '/authentication/pno/' + this.request.country + '/' + this.request.idNumber,
      Object.assign(
        {
          hash: digest,
          hashType: 'SHA512',
          displayText: (typeof displayText === 'string' ? displayText : undefined) 
        },
        this.config.requestParams)
    )
    return tst
  }
}