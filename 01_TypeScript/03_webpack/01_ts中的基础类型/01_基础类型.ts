(() => {
  // -------------> boolean 类型
  let flag: boolean = false;
  console.log('flag:', flag);
  
  // -------------> string 类型
  let str1: string = '床前明月光'
  let str2: string = '疑是地上霜'
  let str3: string = '举头望明月'
  let str4: string = '低头思故乡'
  console.log(`${str1},${str2},${str3},${str4}`)

  // -------------> number 类型
  let a1: number = 10      // 十进制
  let a2: number = 0b1010  // 二进制
  let a3: number = 0o12    // 八进制
  let a4: number = 0xa     // 十六进制
  console.log('number: ', a1,a2,a3,a4)

  // -------------> string+number 拼接
  let strr: string = '我有很多钱'
  let money: number = 1000000
  console.log(strr+money)
 
console.log('====================================');


  // -------------> undefined and null 类型
  // notice: undefined和null可以作为其他类型的子类型，如果代码报错，可在tsconfig.json中检测是否开启了严格模式
  let und: undefined = undefined
  let nll: null = null
  console.log('undefined+null', und, nll)

  // -------------> 数组 类型
  // 定义方式1：
  let arr1: number[] = [100, 200, 300]
  console.log('arr1', arr1)
  
  // 定义方式2：
  let arr2: Array<number> = [10,20,40]
  console.log('arr2', arr2)

  // -------------> 元组 类型
  let arr3:[string, number, boolean] = ['小米粒', 100, false];
  console.log('arr3', arr3)

  
  console.log('====================================');
  // -------------> 枚举类型
  enum Color {
    red,
    green,
    blue
  }
  console.log('color-index:',Color.red, Color.green, Color.blue);
  console.log('color-value:', Color[2]);
  
  // -------------> any 类型
  // notice: 一个字段不确定类型时使用，或数组中要存储多个数据，个数不确定，类型不确定，可以用any来定义
  let str: any = 100
  str = '我变了'

  // 随意更改属性值时，没有提示信息
  let arr: any[] = ['我是字符串', 100, undefined, false];
  console.log('arr', arr);
  
  // -------------> void 类型
  // 声明无返回值类型的函数
  function showMsg(): void {
    console.log('我是个无返回类型的函数');
    
    return 
  }
  showMsg()

  let vd: void = undefined;
  console.log('vdd', vd);
  

  console.log('====================================');
  // -------------> object 类型
  function getObj(obj: object): object {
    console.log('obj', obj);
    return {
      name: '卡卡西',
      age: 27
    }
  }

  console.log(getObj({name: '佐助', age: 18, sex:'男'}))
  console.log(getObj(String))
  console.log(getObj(new String('111')));
  
   
  
  console.log('====================================');
  // -------------> 联合类型（Union Types）表示取值可以为多种类型中的一种
  // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
  // function getString(str: number | string): string {
  //   return str.toString()
  // }
  // console.log(getString('123'));
  

  // 类型断言：
  // 方式1：<类型>变量名
  // 方式2：变量名 as 类型 
  // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
  function getString(str: number | string): number {
    // return str.toString().length
    // if((<string>str).length) { //类型断言1
    //   return (<string>str).length
    // } else {
    //   return str.toString().length
    // }

    if((str as string).length) { //类型断言2
      return (str as string).length
    } else {
      return str.toString().length
    }
  }
  console.log(getString('123'));
  console.log(getString(123456));
  

  console.log('====================================');
  // -------------> 类型推断： TS会在没有明确的指定类型的时候推测出一个类型
  // 1. 定义变量时赋值了, 推断为对应的类型. 
  // let tst = 100
  // tst = '199'
  // console.log(tst);


  // 2. 定义变量时没有赋值, 推断为any类型
  let tst2
  tst2 = 100
  console.log(tst2)
  
})()