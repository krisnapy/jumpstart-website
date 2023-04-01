import { AnyAction } from 'redux'

const initialState = {
  auth: [],
  loading: false,
  error: null,
}

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        auth: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
