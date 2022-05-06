// readonly修饰符： 首先是一个关键字，对类中的属性成员进行修饰，修饰符后，该属性成员，无法在外部被随意更改
// 构造函数中，可以对只读的属性成员的数据进行修改
// 如果构造函数中没有任何的参数，类中的属性成员此时已经使用readonly进行修饰了，那么外部也是不能对这个属性值进行更改的
// 构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改
// 构造函数中的参数可以使用public及private和protected进行修饰，无论是哪个进行修饰，该类中都会自动的添加这么一个属性成员
// 

// readonly修饰类中的属性
// (() => {
//   // 定义一个类
//   class Person {
//     // 属性
//     readonly name: string

//     // 构造函数
//     constructor(name: string) {
//       this.name = name
//     }

//     sayHi() {
//       console.log('哈尼', this.name);
//       // 在类的普通方法中，也不能修改readonly修饰的成员属性值
//     }
//   }

//   // 实例化对象
//   const person: Person = new Person('小天');

//   console.log(person);
//   console.log(person.name);

//   // person.name = '小米'
  
  
// })()


// readonly 修饰类中的构造函数中的参数（参数属性）
(() => {
  // 定义一个类
  class Person {
    // 构造函数
    constructor(readonly name: string = '大侠') {
      this.name = name
    }
  }

  // 实例化对象
  const person: Person = new Person('小天');

  console.log(person);
  console.log(person.name);

  // person.name = '小米'
  
  
})()