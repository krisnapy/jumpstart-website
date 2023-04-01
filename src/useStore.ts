import { useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer, { RootState } from './reducers'

const middleware = applyMiddleware(thunkMiddleware)

const enhancer = composeWithDevTools(middleware)

export const store = createStore(rootReducer, enhancer)

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useStores = () => {
  const thunk = useAppSelector((state) => state)
  
  return { ...thunk }
}
