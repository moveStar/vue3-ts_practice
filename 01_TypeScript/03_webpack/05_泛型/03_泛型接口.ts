// 泛型接口:
// 在定义接口时, 为接口中的属性或方法定义泛型类型,在使用接口时, 再指定具体的泛型类型
(() => {
  // 定义一个泛型接口
  interface IBaseCRUD<T> {
    data: Array<T>
    add:(t:T)=> T
    getUserById: (id: number) => T
  }

  // 定义一个用户信息类
  class User {
    id?:number
    name: string
    age: number

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }

  // 定义一个类，实现User信息的增删改查操作
  class UserCRUD implements IBaseCRUD<User> {
    // 存储用户信息
    data: Array<User>=[]

    // 增加用户信息
    add(user: User): User {
      // 默认产生id
      user.id = Date.now()+Math.random()
      this.data.push(user)
      return user
    }
    
    // 根据id查询用户信息
    getUserById(id: number):User {
      return this.data.find(user => user.id === id)
    }
  }

  // 实例化添加用户信息类对象的类UserCRUD
  const userCRUD: UserCRUD = new UserCRUD()
  userCRUD.add(new User('lucy', 19))
  userCRUD.add(new User('Robin', 20))
  userCRUD.add(new User('Tom', 22))
  userCRUD.add(new User('rose', 15))
  userCRUD.add(new User('Jack', 18))
  console.log('userdata', userCRUD.data);

  // 根据id查找对象
  const { id } = userCRUD.add(new User('Tom', 22));
  const user = userCRUD.getUserById(id);
  console.log('user：', user);
})()