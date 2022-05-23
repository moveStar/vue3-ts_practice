<template>
  <h3>provide 与 inject</h3>
  <p>当前的颜色:{{color}}</p>
  <button @click="color='red'">红色</button>
  <button @click="color='yellow'">黄色</button>
  <button @click="color='blue'">蓝色</button>
  <hr />
  <SonCom />
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import SonCom from './components/SonCom.vue'
export default defineComponent({
  name: 'App',
  components: {
    SonCom
  },  
  setup() {
    const color = ref('red');
    return {
      color
    }
  }
})
</script>