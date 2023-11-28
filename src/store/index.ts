import { defineStore } from "pinia";
import UserType from '@/classes/User'

export type RootState = {
    users: UserType[];
  };

export const useStore = defineStore('store', {
    state: () => ({
        users: []
    } as RootState),
    actions: {
        saveUsers(newUsers: UserType[]) {
            this.users = newUsers
        }
    },
    persist: true
})