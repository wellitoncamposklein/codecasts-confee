import * as types from './mutations-types'
import { postLogin } from '../services'

export const attemptLogin = (context, payLoad) => {
  return postLogin(payLoad.email, payLoad.password)
    .then(data => {
      context.commit(types.setToken, data.email)
      context.commit(types.setUser, data)
    })
}
