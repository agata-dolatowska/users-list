<template>
    <div
        class="loader-container"
    >
    <div
        class="loader"
    ></div>
    </div>
</template>
<style lang="scss" scoped>
.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(#000, .4);
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>