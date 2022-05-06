(() => {
  // 函数类型:就像是一个只有参数列表和返回值类型的函数定义。
  // 参数列表里的每个参数都需要名字和类型。

  // 定义一个接口
  interface SearchFunc {
    (source: string, subString: string): boolean
  }

  // 定义一个对象
  const searchString: SearchFunc = function (source: string,subString:string):boolean {
    return source.search(subString) >1
  }
  console.log('searchFun调用',searchString('哈哈，你真帅', '帅'));
  
})()