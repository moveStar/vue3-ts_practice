// 泛型：
(() => {
  // 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量。
  // 需要达到的目的：根据数量产生对应个数的数据，存放在一个数组中

  // 定义一个函数
  // function getArr(value: any, count: number): any[] {
  //   let result: any[] = []
  //   for(let i = 0;i<count; i++) {
  //     result.push(value)
  //   }
  //   return result
  // }

  // console.log(getArr('aa', 4)); 
  // console.log(122,2);

  // const arr1 = getArr(100.123, 5)
  // console.log(arr1[0].toFixed(2));  // 无提示信息
  
  


  // 泛型:调用时指定类型，会有提示信息
  function getArr1<T>(value: T, count: number): T[] {
    // let result: T[] = []
    let result:Array<T>=[]
    for(let i = 0;i<count; i++) {
      result.push(value)
    }
    return result
  }

  console.log(getArr1('aa', 4))
  const arr2 = getArr1<string>('abcd',3)
  console.log(arr2[0].split(''));
  
  const arr3 = getArr1<number>(123.1234,4)
  console.log(arr3[0].toFixed(1));
  
})()