export type RequestMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

export type Payload = Record<string, any>

export interface ApiParams {
  path: string

  payloadWrapper?: string

  payload?: Payload

}
