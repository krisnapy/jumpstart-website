import { ApiParams, Payload, RequestMethod } from './api-core.type'
import { API_URL } from '@/env'

export class ApiCore {
  private accessToken: any

  private async processResult(response: any) {
    const res = await fetch(`${API_URL}/${response.path}`, {
      method: response.method,
      credentials: 'include',
      headers: {
        Authorization: 'Bearer ',
      },
    })

    const header = await res.headers.get('cookie')
    return await res.json()
  }

  private processPayload(payloadWrapper?: string, payload: Payload = {}) {
    const formData = new FormData()

    for (const name in payload) {
      payloadWrapper
        ? formData.append(payloadWrapper + '[' + name + ']', payload[name])
        : formData.append(name, payload[name])
    }

    return formData
  }

  protected async callApi(method: RequestMethod, { payloadWrapper, path, payload }: ApiParams) {
    const multipart = ['post', 'put', 'patch'].includes(method)

    const wrappedPayload = multipart ? this.processPayload(payloadWrapper, payload) : {}

    const response: any = { method, path, wrappedPayload }

    return await this.processResult(response)
  }

  protected async get(apiParams: ApiParams) {
    return await this.callApi('get', apiParams)
  }

  protected async post(apiParams: ApiParams) {
    return await this.callApi('post', apiParams)
  }

  protected async put(apiParams: ApiParams) {
    return await this.callApi('put', apiParams)
  }

  protected async delete(apiParams: ApiParams) {
    return await this.callApi('delete', apiParams)
  }
}
