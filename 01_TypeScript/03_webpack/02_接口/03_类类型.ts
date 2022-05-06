(()=> {
  // 类类型 
  // 类可以实现多个接口
  // 接口可以继承多个接口

  // 定义一个接口
  interface IFly {
    fly():any
  }

  interface ISwim {
    swim(): any
  }

  // 定义一个类
  class cPerson implements IFly, ISwim {
    fly() {
      console.log('I can fly');
    }
    swim() {
      console.log('I can swim');
    }
  }

  // 声明
  const person1 = new cPerson();
  person1.fly();
  person1.swim();


  interface IAbility extends IFly, ISwim {}
  class person implements IAbility {
    fly() {
      console.log('I can fly2');
    }
    swim() {
      console.log('I can swim2');
    }
  }

  // 声明
  const person2 = new person();
  person2.fly();
  person2.swim();
})()