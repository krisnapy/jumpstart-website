import { register } from '@/actions/auth'
import { useDispatch } from 'react-redux'

export function useRegister() {
  const dispatch = useDispatch<any>()

  const doRegister = (data: Record<string, any>) => {
    dispatch(register(data))
  }

  return { doRegister }
}
