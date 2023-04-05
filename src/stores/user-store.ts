import { userApi } from '@/services/user-api'
import { StateCreator } from 'zustand'

type UserType = {
  id: number
  username: string
  email: string
  role: string
  token: string
  updatedAt: string
  createdAt: string
}

export interface UserState {
  users: UserType[]
  selectedUser: UserType | {}
  loading: boolean
  error: any

  getUsers: () => void
}

export const userStore: StateCreator<UserState, [], [], UserState> = (set) => ({
  users: [],
  selectedUser: {},
  loading: false,
  error: null,

  getUsers: () => {
    set((state: any) => ({
      selectedUser: {
        createdAt: 'halli',
        email: '',
        id: 1,
        role: '',
        token: '',
        updatedAt: '',
        username: '',
      },
    }))
  },
})
