import { API_URL } from '@/env'
import { RootState } from '@/reducers'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

export const getUser = (): ThunkAction<void, RootState, null, AnyAction> => async (dispatch) => {
  try {
    const res = await fetch(`${API_URL}/users`)
    const data = await res.json()

    return dispatch({
      type: 'GET_USER',
      payload: data,
    })
  } catch (error: any) {
    return dispatch({
      type: 'ERROR',
      payload: error.message,
    })
  }
}

export const addUser = (user: any) => ({
  type: 'ADD_USER',
  payload: user,
})

export const removeUser = (id: any) => ({
  type: 'REMOVE_USER',
  payload: id,
})
