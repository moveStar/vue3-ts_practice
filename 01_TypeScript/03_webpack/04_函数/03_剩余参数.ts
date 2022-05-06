// 剩余参数（rest参数）
// 剩余参数是放置在函数声明的时候所有参数的最后面

(() => {
  function showMsg(str: string, str2: string, ...args:string[]) {
    console.log(str);
    console.log(str2);
    console.log(args);
  }
  showMsg('a', 'b', 'c', 'd', 'e') // a, b, [c, d, e]
  
  showMsg('a', 'b') // a  b   []
})()