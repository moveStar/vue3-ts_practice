<template>
  <h2>toRef的使用及特点：</h2>
  <h3>state: {{state}}</h3>
  <h3>age: {{age}}</h3>
  <h3>money: {{money}}</h3>
  <hr>
  <button @click="update">更新数据</button>

  <hr>
  <ChildCommVue :age="age"/>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
import ChildCommVue from './components/ChildComm.vue'
export default defineComponent({
  name: 'App',
  components: {
    ChildCommVue
  },
  setup() {
    const state = reactive({
      age: 8,
      money: 100
    })
    // 把响应式数据state对象中的某个属性age变成ref对象l
    const age = toRef(state, 'age')
    // 把响应式对象中的某个属性使用ref进行包装，变成了一个ref对象
    const money = ref(state.money)
    console.log(age);
    console.log(money);
    
    
    const update =() => {
      console.log('更新数据');
      // 父子都成功更新，页面变化
      // state.age += 1
      age.value += 1

      // state.money += 10  //state中money更新了  const 定义的money没更新
      // money.value += 100
    }
    return {
      state,
      age,
      money,
      update
    }
  }
})
</script>