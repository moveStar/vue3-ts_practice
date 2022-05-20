<template>
  <h2>ChildComm子级组件</h2>
  <h3>age:{{age}}</h3>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  props: {
    age: {
      type: Number,
      required: true
    }
  }
})
</script>