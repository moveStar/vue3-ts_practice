<template>
  <h2>customRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{keyword}}</p>
</template>
<script lang="ts">
// value未来传入的数据类型不确定，所以使用泛型，delay为防抖的时间
function useDebounedRef<T>(value: T, delay = 200) {
  let timeOutId: number
  // 返回一个ref对象
  return customRef((track,trigger) => {
    return {
      get() {
        // 告诉vue追踪数据
        track()
        return value
      },
      set(newValue: T) {
        clearTimeout(timeOutId)
        // 开启定时器 更新数据
        timeOutId = setTimeout(() => {
          value = newValue
          // 告诉vue刷新页面
          trigger()
        }, delay);
      }
    }
  })
}
import { customRef, defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const keyword = useDebounedRef('abc', 500)
    return {
      keyword
    }
  }
})
</script>