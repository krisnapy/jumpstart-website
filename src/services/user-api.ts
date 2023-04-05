import { ApiCore } from './api-core'

export class UserApi extends ApiCore {
  async getUsers() {
    return await this.get({
      path: 'users',
    })
  }
}

export const userApi = new UserApi()
