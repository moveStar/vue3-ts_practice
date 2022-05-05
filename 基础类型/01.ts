/*
 * @Author: your name
 * @Date: 2020-11-02 09:03:19
 * @LastEditTime: 2020-11-02 10:12:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\基础类型\01.ts
 */
/**
 *  数字（都为浮点数）
 * /
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

/**
 * 字符串（文本数据类型）
 */ 
let names: string = "Bob";
names = "smith";
// 模板字符串（用(`)反引号，${expr} 这种形式嵌入表达式）
let name1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name1}. 
I'll BE ${age+1} years old next month`;

/**
 * 数组
 * /
// 定义方式1
let list: number[] = [1, 2, 3];

// 定义方式2
let list1: Array<number> = [4, 5, 6];
 
// 元组（Tuple）：表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let x: [string, number];
x = ['hello', 10];  // ok 
// x = [10, 'hello'];  // error

// 当访问一个已知元素会得到正确的类型
console.log(x[0].substr(1));

// 访问越界元素，可以使用联合类型代替
// x[3] = 'world'; 不能将类型“"world"”分配给类型“undefined”。ts(2322)
// 长度为 "2" 的元组类型 "[string, number]" 在索引 "3" 处没有元素。


/**
 *  枚举(enum)
 */
enum Color { red, green, blue };
let c: Color = Color.green;



/**
 *  Any（动态指定变量类型，或希望跳过类型检查器通过编译）
 * /
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean


let lists: any[] = [1, true, "free"];
lists[1] = 100;

/**
 *  void(只能赋予undefined 和 null)
 *  undefined和null两者各自有自己的类型分别叫做undefined和null
 *  undefined和null是所有类型的子类型
 * /
// forexample：
let second: number = undefined;

// 指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自


/**
 * never(永远不存在的值的类型)
 * 是所有类型的子类型 
 * /


/**
 *  object(表示非原始类型《除number， string， boolean， symbol， null 和 undefined之外的类型)
 */
declare function create(o:object | null): void;
create({ prop: 0 });
create(null);

// create(42) error 
// create("string") error



/**
 * 类型断言 sockTask
 */
// "尖括号"语法
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// as 语法 (JSX只支持as 语法断言)
let someValue1: any = "this is as string";
let strLength1: number = (someValue as string).length;