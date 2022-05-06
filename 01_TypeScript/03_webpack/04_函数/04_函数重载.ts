// 函数重载：函数名字相同。函数的参数及个数不同
(() => {
  // 需求：一个add函数，可以接收2个string类型的参数进行拼接。也乐意接收2个number类型的参数进行相加
  // 定义一个函数
  function add(x:string | number | boolean, y:string | number): string | number {
    return x+'_'+y
  }
  console.log(add(1,3));
  console.log(add('哈哈',2));
  console.log(add(true, '哈'));

  console.log('===================================');
  

  function add2(x:string | number, y:string | number): string | number {
    // let result: string | number
    if(typeof x === 'string' && typeof y === 'string') {
      return x+y
    } else if(typeof x === 'number' && typeof y === 'number') {
      return x+y
    } else {
      return '非法数据'
    }
  }
  console.log(add2(1,3));
  console.log(add2('哈哈',2));

  
  console.log('===================================');
  // 函数重载
  function add3(x:string,y:string)
  function add3(x:number,y:number)
  function add3(x:string | number, y:string | number): string | number {
    if(typeof x === 'string' && typeof y === 'string') {
      return x+y
    } else if(typeof x === 'number' && typeof y === 'number') {
      return x+y
    }
  }
  console.log(add3(1,3));
  // console.log(add3('哈哈',2)); // 与此调用的重载不匹配。爆红
})()