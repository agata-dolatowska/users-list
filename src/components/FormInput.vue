<template>
    <div class="input-container">
        <label>
            <slot></slot>
        </label>
        <div class="infput-field-container">
            <input
                v-model="inputValue"
                @input="$emit('update:value', inputValue)"
                :class="{'text-input-with-color': $props.type === 'color'}"
                class="text-input"
            >
            <template
                v-if="$props.type === 'color'"
            >
                <div class="picker-button-container">
                    <label
                        class="color-picker-button"
                        :for="colorInput"
                        :style="{background: inputValue}"
                    >
                </label>
                </div>
                <input
                    v-model="inputValue"
                    @input="$emit('update:value', inputValue)"
                    type="color"
                    class="input-color-picker"
                    :id="colorInput"
                >
            </template>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, watch } from 'vue';

export default defineComponent({
    props: {
        value: {
            required: true,
            type: [Number, String]
        },
        type: {
            value: String,
            required: false
        },
        colorInput: {
            value: String,
            required: false,
            default: ''
        }
    },
    emits: ['update:value'],
    setup (props) {
        const inputValue = ref<number | string>('');
        const inputValueRef = toRef(props, 'value');
        inputValue.value = inputValueRef.value

        watch(inputValueRef, (value) => {
            inputValue.value = inputValueRef.value;
        });

        return {
            inputValue
        }
    }
})
</script>
<style lang="scss" scoped>
.input-container {
    width: 100%;
    max-width: 200px;
}

.infput-field-container {
    position: relative;
}

.picker-button-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: var(--font-size);
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}
.color-picker-button {
    width: var(--font-size);
    height: var(--font-size);
    max-width: 100px;
    max-height: 100px;
    border-radius: 100px;
}

.font-color .color-picker-button {
    background: var(--font-color);
}

.background-color .color-picker-button {
    background: var(--bg-color)
}

.input-color-picker {
    display: none;
}

.text-input-with-color {
    padding-left: calc(var(--font-size) + 10px);
}

.text-input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    text-align: center;
    padding: 5px 0;
}
</style>