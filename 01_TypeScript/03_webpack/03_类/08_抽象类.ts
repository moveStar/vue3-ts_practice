/* 
抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现）和实例方法。抽象类不能被实例化，为了让子类进行实例化，及实现内部的抽象方法
  不能创建实例对象, 只有实现类才能创建实例
  可以包含未实现的抽象方法  
*/
(() => {
  abstract class Animal {
    abstract name: string
    abstract eat(): any
    // 抽象方法 不能有具体实现（报错）
    // abstract eat() {}

    // 实例方法
    sayHi() {
      console.log('哈喽啊');
    }
  }

  // 定义一个子类
  class Dog extends Animal {
    name: string = '胡夏'
    eat() {
      console.log('狗狗吃饭？');
    }
  }
  const dog:Dog = new Dog();
  dog.eat()
  dog.sayHi()
  console.log(dog.name);
  
  // 不能实例化抽象类的对象 
  // const ani:Animal = new Animal();
})()