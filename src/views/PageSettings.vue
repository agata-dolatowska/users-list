<template>
    <div>
        <FormInput
            v-model:value="settings.fontSize"
            @update:value="updateFontSize"
        >
            Rozmiar czcionki
        </FormInput>
        <FormInput
            v-model:value="settings.fontColor"
            @update:value="updateFontColor"
        >
            Kolor czcionki
        </FormInput>
        <FormInput
            v-model:value="settings.pageBackground"
            @update:value="updateBackground"
        >
            Kolor tła strony
        </FormInput>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, watch } from 'vue';
import { useStore } from '@/store'
import FormInput from '@/components/FormInput.vue'
import Settings from '@/classes/Settings'

export default defineComponent({
    components: {
        FormInput
    },
    setup() {
        const store = useStore()

        let settings = reactive<Settings>({
            fontSize: 16,
            fontColor: '',
            pageBackground: ''
        })

        const updateFontSize = (fontSize: any) => {
            settings.fontSize = fontSize
        }
        const updateFontColor = (fontSize: any) => {
            settings.fontColor = fontSize
        }
        const updateBackground = (fontSize: any) => {
            settings.pageBackground = fontSize
        }

        watch(settings, (value) => {
            updateSettings()
        });

        const updateSettings = () => {
            store.saveSettings(settings)
            document.documentElement.style.setProperty('--font-size', settings.fontSize + 'px');
            document.documentElement.style.setProperty('--font-color', settings.fontColor);
            document.documentElement.style.setProperty('--bg-color', settings.pageBackground);
        }

        onMounted(() => {
            settings.fontSize = store.settings.fontSize
            settings.fontColor = store.settings.fontColor
            settings.pageBackground = store.settings.pageBackground
        })

        return {
            settings,
            updateFontSize,
            updateFontColor,
            updateBackground,
            store
        }
    }
})
</script>