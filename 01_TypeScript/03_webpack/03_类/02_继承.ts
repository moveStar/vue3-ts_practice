// 继承：类和类之间的关系
// 子类:派生类
// 基类：超类(父类)
(() => {
  // 定义一个类
  class Person {
    // 定义属性
    name: string
    age: number
    gender: string

    // 定义构造函数
    constructor(name: string, age: number, gender: string) {
      // 更新属性数据
      this.name = name
      this.age = age
      this.gender = gender
    }

    // 定义实例方法
    sayHi(str: string) {
      console.log(`大家好，我叫${this.name}`,str);
      
    }
  }


  // 定义一个类
  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用的是父类中的构造函数，使用的是super
      super(name, age, gender)
    }

    // 重写或调用父类中的方法
    sayHi(): void {
      console.log('我是student中的方法');
      super.sayHi('哈哈')
      
    }
  }

  const person = new Person('铮铮', 18, '男');
  person.sayHi('嘿');
  console.log('person:',person);

  const student = new Student('安安', 16, '女');
  student.sayHi()
  console.log('student', student);
  
  

  
})()