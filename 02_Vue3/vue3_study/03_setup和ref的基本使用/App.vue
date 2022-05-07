<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{count}}</h3>
  <button
    @click="updateCount"
  >
    更新数据
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App',
  // 需求：页面展示一个默认数据，点击按钮，更新数据
  // vue2的实现方式
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.count++
  //   }
  // }

  // vue3的实现方式
  // setup是组合API的入口函数
  setup() {
    // 变量
    // let count = 0; // 函数执行，但页面数据无变化，因为不是响应式
    // ref是一个函数，定义一个响应式数据
    // ref一般用来定义一个基本类型的响应式数据，
    // count的类型是ref类型
    const count = ref(0);
    function updateCount() {
      // 报错：count是一个ref对象，无法进行++操作
      // count++

      count.value++
    }
    // 返回一个对象
    return {
      // 属性
      count,
      // 方法
      updateCount
    }
  }

});
</script>

<style>

</style>
