// 类型注解：是一种轻量级的为函数或变量提供的约束
(() => {
  function showMsg(str:string) {
    return '床前明月光,'+str;
  }
  let msg = '疑是地上霜';
  // let msg = [11, 22, 33];
  console.log(showMsg(msg));
})()