import { ApiCore } from './api-core'

export class AuthApi extends ApiCore {
  async login(payload = {}) {
    return await this.post({
      path: 'login',
      payload,
    })
  }

  async logout(payload = {}) {
    return await this.delete({
      path: 'logout',
      payload,
    })
  }

  async register(payload = {}) {
    return await this.post({
      path: 'register',
      payload,
    })
  }
}

export const authApi = new AuthApi()
