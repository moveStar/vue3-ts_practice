<template>
  <h2>Child子级组件</h2>
  <h3>{{msg}}</h3>
  <!-- <h3>{{count}}</h3> -->
  <button @click="emitXxx">分发事件</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ChildComm',
  props: ['msg'],
  // setup的细节问题
  // setup在beforeCreate之前执行，且只执行一次
  // setup在执行时，当前组件还没有创建出来，组件实例对象this是不能使用的，是undefined
  
  // setup中的返回值是一个对象。内部的属性和方法是给html模板使用的
  // setup中的对象内部的属性和data函数中的retur对象的属性都可以在htm模板中使用
  // setup中的对象中的属性和data函数中的对象中的属性会合并为组件对象的属性(示例看mouted中的this)
  // setup中的对象中的方法和methods对象中的方法会合并成组件对象的方法
  // 在vue3中尽量不要混合使用data和setup及methods和setup，setup中不能访问data和methods中的属性和方法，先后顺序问题
  // async不能时一个async函数：因为async函数的返回值是promise，不是return的对象，模板看不到return对象中的属性数据。

  // 
  beforeCreate() {
    console.log('beforeCreate执行了');
    
  },
  setup(props, {attrs, slots, emit}) {
  // setup(props, context) {
    // props: 包含props配置声明且传入了的所有属性的对象
    // props参数是一个对象，里面有父级组件向子级组件传递的数据，并且是在自己组建中使用props接收到的所有的属性
    // console.log('props', props.msg);
    
    // context参数，是一个对象，包含：attrs对象（获取当前组件标签上所有的属性的对象，但是该属性是在props中没有声明接收的所有的属性的对象）、emit（分发事件的）、slots对象（插槽）

    // attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
    // slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
    // emit: 用来分发自定义事件的函数, 相当于 this.$emit
    // console.log('context', context.attrs.msg2);
    // console.log(context.emit);

    console.log('attrs', attrs.msg2);
    console.log(emit);

    console.log('====================');
    
    console.log('setup执行了')
    function emitXxx() {
      // context.emit('xxx', '啊哈')
      emit('xxx', '啊哈')
    }
    const showMsg1 = () => {
      console.log('seup中的showMsg1方法');
      
    }
    return {
      showMsg1,
      emitXxx
      // setup中一般都是返回一个对象，对象中的属性和方法都可以在html模板中直接使用
    }
  },
  // data() {
  //   return {
  //     count: 10
  //   }
  // },
  // // 界面渲染完毕执行
  // mounted() {
  //   console.log('mouted执行了', this);
  // },
  // methods: {
  //   showMsg2() {
  //     console.log('methods中的showMsg2方法');
      
  //   }
  // }
})
</script>