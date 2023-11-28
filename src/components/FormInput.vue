<template>
    <label>
        <span>
            <slot></slot>
        </span>
        <input
            v-model="inputValue"
            @input="$emit('update:value', inputValue)"
        >
    </label>
</template>
<script lang="ts">
import { defineComponent, ref, toRef, watch } from 'vue';

export default defineComponent({
    props: {
        value: {
            required: true,
            type: [Number, String]
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