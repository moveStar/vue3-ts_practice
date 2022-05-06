// 需求: 创建人的对象, 需要对人的属性进行一定的约束

// id是number类型, 必须有, 只读的
// name是string类型, 必须有
// age是number类型, 必须有
// sex是string类型, 可以没有
(() => {
  interface IPerson {
    readonly id: number,
    name: string,
    age: number,
    sex?: string
  }

  const person1: IPerson = {
    id: 1,
    name: '肖战',
    age: 19,
    // sex: '男'
  }

  // person1.id = 100;
  person1.sex = '男'
  console.log('person1', person1);

})()