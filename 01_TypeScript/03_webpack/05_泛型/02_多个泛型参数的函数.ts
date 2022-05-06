// 多个泛型参数的函数
(() => {
  // 定义一个函数
  function getMsg<K, V>(value1:K, value2: V): [K, V] {
    return [value1, value2]
  }

  const arr1 = getMsg<string, number>('lucy', 123.1234)
  console.log('arr1:', arr1);
  
  console.log('arr1---result:', arr1[0].split(''), arr1[1].toFixed(2));
})()