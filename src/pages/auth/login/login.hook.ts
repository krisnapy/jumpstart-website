import { login } from '@/actions/auth'
import { useDispatch } from 'react-redux'

export function useLogin() {
  const dispatch = useDispatch<any>()

  const onLogin = (data: Record<string, any>) => {
    dispatch(login(data))
  }

  return { onLogin }
}
