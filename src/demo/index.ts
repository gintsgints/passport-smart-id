import { Config } from '../config'
import { SmartId } from '../smartId'

const params: Config = {
  baseURL: 'https://sid.demo.sk.ee/smart-id-rp/v1',
  relyingPartyUUID: '00000000-0000-0000-0000-000000000000',
  relyingPartyName: 'DEMO',
  certificateLevel: 'QUALIFIED'
}

let smartid = new SmartId(params)

let demo = async () => {
  let tst = await smartid.auth('LV', '04116611830', 'Test message')
  return tst
}

console.log(demo())
