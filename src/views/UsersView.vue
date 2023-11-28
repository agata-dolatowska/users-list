<template>
    <button
        v-if="!users.length"
        @click="getUsers"
    >
        Pobierz listę użytkowników
    </button>
    <p
        v-if="fetchError"
    >
        {{ fetchError }}
    </p>
    <ul>
        <li
            v-for="user of users"
            :key="user.id"
        >
            {{ user.first_name }}
            {{ user.last_name }}
            <img :src="user.avatar"/>
        </li>
    </ul>
    <DataLoader
        v-if="loaderVisible"
    />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from '@/store'
import UserType from '@/classes/User'
import DataLoader from '@/components/DataLoader.vue'

export default defineComponent({
    components: {
        DataLoader
    },
    setup() {
        onMounted(() => {
            loaderVisible.value = true
            getSavedData()
            loaderVisible.value = false
        })

        const store = useStore()
        const users = ref<UserType[]>([])
        const fetchError = ref('')
        const loaderVisible = ref(false)

        const getSavedData = () => {
            users.value = store.users
        }

        const getUsers = async () => {
            try {
                loaderVisible.value = true
                const res = await fetch('https://random-data-api.com/api/v2/users?size=4')

                if (!res.ok) {
                    throw Error('nie można pobrać danych :(')
                }

                users.value = await res.json()
                store.saveUsers(users.value)
                loaderVisible.value = false
            } catch (err) {
                const error = err as Error
                fetchError.value = error.message
                loaderVisible.value = false
            }
        }

        return {
            users,
            fetchError,
            getUsers,
            store,
            loaderVisible
        }
    }
})
</script>