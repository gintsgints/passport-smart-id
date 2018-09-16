export interface requestParams {
  relyingPartyUUID: string
  relyingPartyName: string
  certificateLevel: string
}

export interface Config {
  baseURL: string
  requestParams: requestParams
}
