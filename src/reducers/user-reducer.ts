import { AnyAction } from 'redux'

export interface UserInterface {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface UserState {
  user: UserInterface[]
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  user: [],
  loading: false,
  error: null,
}

const usersReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: [...state.user, action.payload],
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'REMOVE_USER':
      return {
        ...state,
        user: state.user.filter((user: any) => user?.id !== action.payload),
      }
    default:
      return state
  }
}

export default usersReducer
