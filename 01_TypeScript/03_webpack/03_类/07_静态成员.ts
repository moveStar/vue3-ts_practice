// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的
(() => {
  // 定义一个类
  class Person {
    // 类中有一个默认的内置name属性
    // 静态属性
    static name1: string = '肖战'
    // 构造函数不能通过static来修饰
    constructor() {
      // this.name1 = name
    }
    static sayHi() {
      console.log('达瓦迪卡');
    }
  }

  // 实例化对象
  // const person:Person = new Person('肖战');
  // 通过实例化对象调用的属性(实例属性)
  // console.log(person.name1);
  // 是通过实例化对象调用的方法(示例方法)
  // person.sayHi();

  // 通过类名，静态属性的方式来访问该成员数据
  console.log(Person.name1);
  Person.name1 = '佐助'
  console.log(Person.name1);
  // 通过类名。静态方法的方式来调用内部的静态的方法
  Person.sayHi()

})()