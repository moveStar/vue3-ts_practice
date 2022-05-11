<template>
  <h2>子级组件</h2>
  <h3>{{msg}}</h3>
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default defineComponent({
  name: 'App',
  // vue2.x 生命周期钩子
  beforeCreate() {
    console.log('vue2.x beforeCreate');
  },
  created() {
    console.log('vue2.x created');
  },
  beforeMount() {
    console.log('vue2.x beforeMount');
  },
  mounted() {
    console.log('vue2.x mounted');
  },
  beforeUpdate() {
    console.log('vue2.x beforeUpdate');
  },
  updated() {
    console.log('vue2.x updated');
  },
  beforeUnmount() {
    console.log('vue2.x beforeUnmount');
  },
  unmounted() {
    console.log('vue2.x unmounted');
  },
  // vue2.x在vue3.x中被改名
  // beforeDestroy() {
  //   console.log('vue2.x beforeDestroy');
  // },
  // destroyed() {
  //   console.log('vue2.x destroyed');
  // }

  

  setup() {
    console.log('3.0中的setup');
    
    const msg = ref('aaaa');
    const update = () => {
      msg.value += '==='
    }
    onBeforeMount(() => {
      console.log('vue3.x中的 onBeforeMount');
    }),
    onMounted(() => {
      console.log('vue3.x中的 onMounted');
    })
    // onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted
    onBeforeUpdate(() => {
      console.log('vue3.x中的 onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('vue3.x中的 onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('vue3.x中的 onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('vue3.x中的 onUnmounted');
    })
    return {
      msg,
      update
    }
  }

  // vue3.x 生命周期钩子

})
</script>