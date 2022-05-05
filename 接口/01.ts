/*
 * @Author: your name
 * @Date: 2020-11-02 11:28:17
 * @LastEditTime: 2020-11-04 08:56:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\接口\01.ts
 */

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


// interface LabelledValue {
//   label: string;
// }
  
//   function printLabel(labelledObj: LabelledValue) {
//     console.log(labelledObj.label);
//   }
  
//   let myObj = {size: 10, label: "Size 10 Object"};
//   printLabel(myObj);

/**
 * 可选属性
 * 应用在 option bags 模式：给函数传入的参数对象中只有部分属性赋值了
 * 可以对可能存在的属性进行预定义
 */
interface SquareConfig {
    color?:string;
    width?:number;
}


/**
 * 只读属性
 */
interface point {
    readonly x: number;
    readonly y: number;
}

// 赋值
let p1: point = {x: 10, y: 20};
// 初始赋值后无法改变值
// p1.x = 5;  


// *****ReadonlyArray<T>****** 将所有可变方法去掉，确保数组创建后再也不能被修改

let a: number[] = [1,2,3,4,5];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12;      类型“readonly number[]”中的索引签名仅允许读取。
// ro.length = 100; 无法分配到 "length" ，因为它是只读属性。
// a = ro;          类型 "readonly number[]" 为 "readonly"，不能分配给可变类型 "number[]"。

// 用类型断言重写
a = ro as number[];


/**
 * 额外的属性检查???
 */


// 实现接口
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }



