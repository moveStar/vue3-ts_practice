<template>
  <h2>ChildComm子级组件</h2>
  <h3>age:{{age}}</h3>
  <h3>length:{{length}}</h3>
</template>
<script lang="ts">
import { defineComponent, computed, Ref, toRef } from 'vue'
function useGetLength(age: Ref) {
  // const lengt = computed(() => age.value.toString.length)
  return computed(() => {
    return age.value.length
  })
  // return lengt
}
export default defineComponent({
  name: 'ChildComm',
  props: {
    age: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    console.log('props====>', props);
    
    const length = useGetLength(toRef(props,'age'))
    return {
      length
    }
  }
})
</script>