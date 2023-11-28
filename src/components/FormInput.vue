<template>
    <div class="input-container">
        <label>
            <span
                class="input-label-text"
            >
                <slot></slot>
            </span>
        </label>
        <div class="infput-field-container">
            <input
                v-model="inputValue"
                @input="$emit('update:value', inputValue)"
                :class="{'text-input-with-color': $props.type === 'color'}"
                class="text-input"
            >
            <p
                v-if="error"
                class="error"
            >
                {{ error }}
            </p>
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
        },
        error: {
            required: false,
            default: ''
        },
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
    max-width: 400px;

    & + .input-container {
        margin-top: 30px;
    }
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
    box-shadow: 3px 2px 10px rgba(black, 0.2);
}

.font-color .color-picker-button {
    background: var(--font-color);
}

.background-color .color-picker-button {
    background: var(--bg-color)
}

.input-color-picker {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
}

.text-input {
    background: transparent;
    border: none;
    text-align: center;
    width: 100%;

    &:focus {
        outline: none;
    }
}

.input-label-text {
    color: var(--font-color);
    opacity: 0.8;
    font-size: calc(var(--font-size) - 5px)
}

.error {
    font-size: 12px;
    color: red;
}
</style>