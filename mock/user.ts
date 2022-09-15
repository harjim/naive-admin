import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user/login',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: true,
        message: 'ok'
      }
    }
  }
] as MockMethod[]
