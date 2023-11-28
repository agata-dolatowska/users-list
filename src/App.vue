<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/settings">Ustawienia</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from '@/store'

export default defineComponent({
    setup() {
      onMounted (() => {
        const store = useStore()
        document.documentElement.style.setProperty('--font-size', store.settings.fontSize + 'px');
        document.documentElement.style.setProperty('--font-color', store.settings.fontColor);
        document.documentElement.style.setProperty('--bg-color', store.settings.pageBackground);
      })
    }
  })
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position: sticky;
  top: 0;
  background: #fff;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
