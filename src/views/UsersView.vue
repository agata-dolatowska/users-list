<template>
    <!-- <button
        @click="getUsers"
    > -->
    <button
        v-if="!users.length"
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserType from '@/classes/User'

export default defineComponent({
    setup() {
        const users = ref<UserType[]>([])
        const fetchError = ref('')

        const getUsers = async () => {
            try {
                const res = await fetch('https://random-data-api.com/api/v2/users?size=4')

                if (!res.ok) {
                    throw Error('nie można pobrać danych :(')
                }

                users.value = await res.json()

            } catch (err) {
                const error = err as Error
                fetchError.value = error.message
            }
        }

        getUsers()

        return {
            users,
            fetchError,
            getUsers
        }
    }
})
</script>