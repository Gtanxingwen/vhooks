<template>
  <div class="text">count is: {{ count }}</div>
  <button class="button" @click="run">click</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useDebounceFn } from '../../packages'

export default defineComponent({
  name: 'UseDebounceFn',
  setup: () => {
    const count = ref(0)
    const { run } = useDebounceFn(
      () => {
        count.value += 1
      },
      1000,
      true
    )
    return { count, run }
  }
})
</script>

<style scoped>
.text {
  margin: 20px 0;
}
.button {
  margin: 0 0 20px 0;
  cursor: pointer;
}
</style>
