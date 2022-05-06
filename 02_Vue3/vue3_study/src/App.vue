<template>
  <div>哈哈</div>
  <!-- <div>{{number}}</div> -->
</template>

<script lang="ts">
// defineComponent函数，目的是定义一个组价，内部可以传入一个配置对象
import { defineComponent } from 'vue';

// 暴露出去一个定义好的组件
export default defineComponent({ //调用了一个函数，这个函数的返回值是个对象
  // 当前组件的名字是App
  name: 'App',
  // 测试代码  setup是组合API中第一个要是用的函数
  // setup() {
  //   const number = 10
  //   return {
  //     number
  //   }
  // }
});
</script>

<style>

</style>
