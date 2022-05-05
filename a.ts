/*
 * @Author: your name
 * @Date: 2020-10-29 17:40:25
 * @LastEditTime: 2020-10-30 09:11:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\a.ts
 */
// console.log("1 准备开始执行 for 循环");

// for(let i: number = 1; i <= 3; i++) {
//     console.log("...一锅装不下");
// }

// console.log("2 for 循环执行结束");

// let names :string[] = ['Dany', 'July'];
// console.log(names);

function getSum(nums: number[]): number {
    let sum: number = 0;
    for(let i: number = 1; i < nums.length; i++) {
        sum += nums[i];
    } 
    // console.log(sum);
    return sum;
}

let nums: number[] = [1,3,5,7,9];
getSum(nums);

let nums2: number[] = [2,4,6,8];
getSum(nums2)

let result: number = getSum(nums) + getSum(nums2);
console.log(result);
