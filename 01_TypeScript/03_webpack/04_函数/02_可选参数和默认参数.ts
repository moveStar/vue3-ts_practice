// 可选参数：函数在声明的时候，内部参数使用了？号进行了修饰，表示该参数可选可不选
// 默认参数：函数在声明的时候，内部参数有自己的默认值
(() => {
  // 定义一个函数：传入姓氏和名字，可以得到姓名
  // 需求1：如果不传入任何内容，返回默认姓氏
  // 需求2：如果只传入姓氏，返回姓氏
  // 需求3：如果传入姓氏和名字，返回姓名
  const getFullName = function(firstName:string='诸葛', lastName?: string):string {
    if(lastName) {
      return firstName +'_'+lastName
    } else {
      return firstName
    }
  }
  console.log(getFullName());
  
})()