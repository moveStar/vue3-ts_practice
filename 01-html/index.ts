/*
 * @Author: your name
 * @Date: 2020-10-30 14:36:43
 * @LastEditTime: 2020-11-02 09:02:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\01-html\index.ts
 */


let btn = document.querySelector('#btn') as HTMLButtonElement;

// btn.addEventListener('click', function () {
//     console.log('鼠标点击事件触发了');
// })

// btn.addEventListener('mouseenter', function () {
//     console.log('鼠标移入了');
// })

// 事件只执行一次 { once: true }
btn.addEventListener('click', function() {
    console.log('hhh');
}, { once: true})


// 添加、移除事件
function handleClick() {
    console.log("你点我试试");
}

btn.addEventListener("click", handleClick);

let removeBtn = document.querySelector("#remove") as HTMLButtonElement;
removeBtn.addEventListener('click', function () {
    btn.removeEventListener("click", handleClick)
})



// 添加事件，让当前按钮的文字大小变为30px
// btn.addEventListener('click', function (event) {
//     // console.log(event.type);
//     // console.log(event.target);
//     // console.log(event);
    
//     let target = event.target as HTMLButtonElement
//     target.style.fontSize = '30px'
// })