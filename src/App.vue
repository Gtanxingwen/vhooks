<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <UseDebounceFn />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UseDebounceFn from '@components/UseDebounceFn.vue'

export default defineComponent({
  name: 'App',
  components: {
    UseDebounceFn
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
