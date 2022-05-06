// 存取器：让我们能够有效的控制对 对象中的成员的访问，通过getters和setters
(()=> {
  // 外部可以传入姓氏和名字的数据，同时使用get和set控制姓名的数据
  class Person {
    firstName: string
    lastName: string
    
    // 构造器
    constructor(firstName: string,lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    // 读取器
    get fullName() {
      console.log('geting...');
      
      return this.firstName +'_'+ this.lastName
    }

    // 设置器
    set fullName(val) {
      let names = val.split('_');
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  
    // 实例化对象
    const person:Person = new Person('上官','阳阳');
    console.log(person);
    console.log(person.fullName);
    person.fullName = '东方_不败'
    console.log(person.fullName);
    
    
})()