<template>
    <FormButton
        v-if="!users.length"
        @click="getUsers"
    >
        Pobierz listę użytkowników
    </FormButton>
    <p
        v-if="fetchError"
    >
        {{ fetchError }}
    </p>
    <ul
        class="list-wrapper"
    >
        <UserItem
            v-for="user in users"
            :key="user.id"
            :user="user"
        ></UserItem>
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
import UserItem from '@/components/UserItem.vue'
import FormButton from '@/components/FormButton.vue'

export default defineComponent({
    components: {
        DataLoader,
        UserItem,
        FormButton
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
<style lang="scss" scoped>
.list-wrapper {
    max-width: 400px;
    margin: 50px auto;
    background: #fff;
}
</style>