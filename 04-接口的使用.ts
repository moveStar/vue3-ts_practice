/*
 * @Author: zhangweijuan
 * @Date: 2020-10-30 10:13:41
 * @LastEditTime: 2020-10-30 14:32:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\接口的使用.ts
 */
// 创建接口
interface IUser {
    name: string;
    age: number;
    sayHi: () => void;
}

let p1: IUser = {
    name: '李达',
    age: 19,
    sayHi: function() {
        console.log("Hi,李达");
    }
}

// 访问属性
console.log(p1.name);
// 调用方法
p1.sayHi();
p1.name = '笑笑';

console.log(p1.name);
// console.clear();
// Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// 回调函数一般没有函数名称，称为匿名函数  forEach
let suns: string[] = ['卡酷一',"啦啦啦", "喜刷刷"]
suns.forEach(function(item, index) {
    console.log(index, item);
})

let numss: number[] = [1,3, 12,5,2,7,9];

numss.some((item) => {
    console.log(item);
    if(item > 10) {
        return true;
    }
    return false;
})

// p.classList.contains('a')  contains 判断是否包含