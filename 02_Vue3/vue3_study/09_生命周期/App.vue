<template>
  <h2>App父级组件</h2>
  <button @click="isShow=!isShow">切换显示</button>
  <hr />
  <ChildComm v-if="isShow" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ChildComm from "./components/ChildComm.vue";
export default defineComponent({
  name: 'App',
  components: {
    ChildComm
  },
  setup() {
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
</script>