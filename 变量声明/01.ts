/*
 * @Author: your name
 * @Date: 2020-11-02 10:12:58
 * @LastEditTime: 2020-11-02 11:27:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\变量声明\01.ts
 */
/**
 * 展开
 */

 let first = [1, 2];
 let second = [3, 4];
 let bothPLus = [0, ...first, ...second, 5];

//  创建了first和second的一份浅拷贝


// 展开对象（仅包含对象自身的可枚举属性，即当展开一个对象实例时，会丢失其方法）
class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
//   clone.m(); // error!