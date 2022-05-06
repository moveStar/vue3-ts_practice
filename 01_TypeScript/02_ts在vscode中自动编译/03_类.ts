(() => {
  // 定义一个接口
  interface IPerson {
    firstName: string,
    lastName: string
  }

  // 定义一个类型
  class Person {
    // 声明属性
    firstName: string
    lastName: string
    fullName: string

    // 声明一个构造器函数
    constructor(firstName: string, lastName: string) {
      // 更新属性值
      this.firstName = firstName
      this.lastName = lastName

      this.fullName = this.firstName + '_' + this.lastName
    }
  }

  // 定义一个函数
  function showFullName(person:IPerson) {
    return person.firstName + '_' + person.lastName;
  }

  // 实例化对象
  const person = new Person('孔明','诸葛');
  console.log(showFullName(person));
})()