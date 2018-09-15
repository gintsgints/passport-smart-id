import { Config } from './config'
import { Request } from './request'
import Axios from 'axios'

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
    let tst = await Axios.post(this.config.baseURL + '/authentication/pno/' + this.request.country + '/' + this.request.idNumber)
    return tst
  }
}