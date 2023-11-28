<template>
    <button
        class="button"
    >
        <slot></slot>
    </button>
</template>
<style lang="scss" scoped>
.button {
    border: 1px solid black;
    padding: 15px 20px;
    text-transform: uppercase;
    background: transparent;
    margin: 30px 0;
    transition: background .5s, color .5s, border .5s;
    letter-spacing: 1px;

    &:hover {
        background: rgba(#000, .3);
        color: rgba(#fff, .8);
        border: 1px solid transparent;
    }
}
</style>