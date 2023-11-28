import { defineStore } from "pinia";
import UserType from '@/classes/User'
import Settings from "@/classes/Settings";

export type RootState = {
    users: UserType[];
    settings: Settings
  };

export const useStore = defineStore('store', {
    state: () => ({
        users: [],
        settings: {
            fontSize: 16,
            fontColor: '#000',
            pageBackground: '#fff'
        }
    } as RootState),
    actions: {
        saveUsers(newUsers: UserType[]) {
            this.users = newUsers
        },
        saveSettings(settings: Settings) {
            this.settings = settings
        },
        clearSettings() {
            this.settings = {
                fontSize: 16,
                fontColor: '#000',
                pageBackground: '#fff'
            }
        }
    },
    persist: true
})