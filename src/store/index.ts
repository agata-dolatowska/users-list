import { defineStore } from "pinia";
import UserType from '@/classes/User'

export type RootState = {
    users: UserType[];
    fontSize: number;
    fontColor: string
    pageBackground: string
  };

export const useStore = defineStore('store', {
    state: () => ({
        users: [],
        fontSize: 16,
        fontColor: '#000',
        pageBackground: '#fff'
    } as RootState),
    actions: {
        saveUsers(newUsers: UserType[]) {
            this.users = newUsers
        },
        saveFontSize(size: number) {
            this.fontSize = size
        },
        saveFontColor(color: string) {
            this.fontColor = color
        },
        savePageBg(color: string) {
            this.pageBackground = color
        }
    },
    persist: true
})