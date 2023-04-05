import { create } from 'zustand'
import { UserState, userStore } from './user-store'

interface Stores extends UserState {}

const useStores = create<Stores>()((...a) => ({
  ...userStore(...a),
}))

export default useStores