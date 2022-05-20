<template>
  <h2>readonly和shallowReadonly</h2>
  <h3>state: {{state}}</h3>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: '小樱',
      age: 18,
      car: {
        name: '奔驰',
        color: 'yellow'
      }
    })
    const update =() => {
      console.log('test');
    }
    return {
      state,
      update
    }
  }
})
</script>