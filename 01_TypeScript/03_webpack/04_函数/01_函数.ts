// 函数：封装了一些重复使用的代码，在需要的时候直接调用即可
(() => {
  // js中的书写方式，可在ts中书写
  // 函数声明，命名函数
  // function add(x,y) {
  //   return x+y
  // }

  // 函数表达式，匿名函数
  // const add2 = function(x,y) {
  //   return x+y
  // }


  // ts中的书写
  // 为函数定义类型
  function add(x:string,y:string): string {
    return x+y
  }
  console.log(add('111','222'));
  const result1:string = add('111', '222')
  console.log(result1);

  const add2 = function(x:number, y:number): number {
    return x+y
  }
  console.log(add2(10,20));


  // 函数的完整写法
  // add3------>变量名------>函数add3
  // (x:number,y:number) => number 当前这个函数的类型
  // function(x:number,y:number):number { return x+y }

  const add3:(x:number,y:number) => number= function(x:number,y:number):number {
    return x+y
  }
  console.log(add3(10, 100));
  
  
})()