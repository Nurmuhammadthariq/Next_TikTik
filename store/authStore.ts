import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import axios from 'axios'
import { BASE_URL } from '@/utils'

const authStore = (set: any) => ({
	userProfile: null,
	allUsers: [],

	addUser: (user: any) => set({ userProfile: user }),
	removeUser: () => set({ userProfile: null }),

	fetchAllUsers: async () => {
		const response = await axios.get(`${BASE_URL}/api/users`);
		set({ allUsers: response.data });
	}
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


