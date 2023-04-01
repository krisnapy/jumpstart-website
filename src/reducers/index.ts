import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { combineReducers } from 'redux'
import authReducer from './auth-reducer';
import userReducer from './user-reducer'

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
})

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useStores = () => {
  const thunk = useAppSelector((state) => state)
  
  return { ...thunk }
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer

