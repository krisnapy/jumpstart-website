import { RootState } from '@/reducers'
import { authApi } from '@/services/auth-api'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const login =
  (data: any): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const res = await authApi.login(data)

      return dispatch({
        type: 'LOGIN',
        payload: res,
      })
    } catch (error: any) {
      return dispatch({
        type: 'ERROR',
        payload: error.message,
      })
    }
  }

  export const register =
  (data: any): ThunkAction<void, RootState, null, AnyAction> =>
  async (dispatch) => {
    try {
      const res = await authApi.register(data)

      return dispatch({
        type: 'REGISTER',
        payload: res,
      })
    } catch (error: any) {
      return dispatch({
        type: 'ERROR',
        payload: error.message,
      })
    }
  }
