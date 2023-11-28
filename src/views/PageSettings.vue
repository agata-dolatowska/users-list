<template>
    <div>
        <FormInput
            v-if="fontSize"
            v-model:value="fontSize"
            @update:value="updateFontSize"
        >
            Rozmiar czcionki
        </FormInput>
        <FormInput
            v-model:value="fontColor"
        >
            Kolor czcionki
        </FormInput>
        <FormInput
            v-model:value="pageBackground"
        >
            Kolor tła strony
        </FormInput>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from '@/store'
import FormInput from '@/components/FormInput.vue'

export default defineComponent({
    components: {
        FormInput
    },
    setup() {
        const store = useStore()

        const fontSize = ref()
        const fontColor = ref()
        const pageBackground = ref()

        const updateFontSize = (size: any) => {
            store.saveFontSize(size)
            fontSize.value = size
            document.documentElement.style.setProperty('--font-size', fontSize.value + 'px');
        }

        onMounted(() => {
            fontSize.value = store.fontSize
            fontColor.value = store.fontColor
            pageBackground.value = store.pageBackground
        })

        return {
            fontSize,
            fontColor,
            pageBackground,
            updateFontSize,
            store
        }
    }
})
</script>