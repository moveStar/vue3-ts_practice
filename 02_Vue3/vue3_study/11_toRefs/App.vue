<template>
  <h2>toRefs的使用</h2>
  <!-- <h3>name: {{state.name}}</h3>
  <h3>age: {{state.age}}</h3> -->
  <hr>
  
  <h3>name: {{name}}</h3>
  <h3>age: {{age}}</h3>
  
  <h3>name2: {{name2}}</h3>
  <h3>age2: {{age2}}</h3>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
function useFeatureX() {
  const state2 = reactive({
    name2: '自来水',
    age2: 18
  })
  return {
    ...toRefs(state2)
  }
}
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      name: '自来水',
      age: 18
    })
    
    // toRefs可以把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref（把reactive包裹的数据变成普通的对象包裹的ref数据）
    // const state2 = toRefs(state)
    const { name, age } = toRefs(state)
    // console.log('state2:', state2);
    
    // 定义一个定时器，更新数据。如果更新成功，state是响应式数据
    setInterval(() => {
      // state.name += '==='
      // state2.name.value += '==='
      name.value += '-=='
      console.log('=========');
    }, 1000)
    const { name2, age2 } = useFeatureX()
    return {
      // state
      // ...state  // 此时不是响应式数据了，===> {name: '自来水'，age: 18}
      // ...state2
      name,
      age,
      name2,
      age2
    }
  }
})
</script>