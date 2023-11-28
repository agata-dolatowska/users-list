<template>
    <div class="settings-page">
        <div>
            <FormInput
                v-model:value="settings.fontSize"
                @update:value="updateFontSize"
                :error="fontSizeError"
            >
                Rozmiar czcionki
            </FormInput>
            <FormInput
                v-model:value="settings.fontColor"
                @update:value="updateFontColor"
                type="color"
                class="font-color"
                colorInput="font"
            >
                Kolor czcionki
            </FormInput>
            <FormInput
                v-model:value="settings.pageBackground"
                @update:value="updateBackground"
                type="color"
                class="background-color"
                colorInput="bg"
            >
                Kolor tła strony
            </FormInput>
        </div>
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
        const maxFontSize = 40;
        const minFontSize = 16;
        const fontSizeError = ref('')

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
            if (settings.fontSize > maxFontSize ||
                settings.fontSize < minFontSize
            ) {
                fontSizeError.value = `Dodaj rozmiar czcionki w zakresie ${minFontSize} do ${maxFontSize}`
                return
            } else {
                fontSizeError.value = ''
            }

            // przyszłościowo lepiej by było określić czy kontrast między kolorem tekstów
            // a tła jest wystarczający
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
            store,
            fontSizeError
        }
    }
})
</script>
<style lang="scss" scoped>
.settings-page {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
}
</style>