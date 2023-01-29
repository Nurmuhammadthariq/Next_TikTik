import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import axios from 'axios'

const authStore = (set: any) => ({
	userProfile: null,

	addUser: (user: any) => set({ userProfile: user }),
	removeUser: () => set({ userProfile: null })
})

const useAuthStore = create((
	persist(authStore, {
		name: 'auth'
	})
))

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Store', useAuthStore)
}

export default useAuthStore


