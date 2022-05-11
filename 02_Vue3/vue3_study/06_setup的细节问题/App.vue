<template>
  <h2>App父级组件</h2>
  <h3>msg：{{msg}}</h3>
  <button @click="msg+='==='">更新数据</button>
  <hr>
  <ChildComm :msg = "msg" msg2="真香" @xxx='xxx'/>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
// 引入子级组件 ChildComm
import ChildComm from "./components/ChildComm.vue";
export default defineComponent({
  name: 'App',
  // 注册
  components: {
    ChildComm
  },

  setup() {
    function xxx(txt: string) {
      msg.value += '==='+txt
    } 
    // 定义一个Ref类型的数据
    const msg = ref('what are you doing?')
    return {
      msg,
      xxx
    }
  }
})
</script>