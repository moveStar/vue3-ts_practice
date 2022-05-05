/*
 * @Author: your name
 * @Date: 2020-10-30 16:19:38
 * @LastEditTime: 2020-10-30 18:01:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\Tic Tac Toe\index.ts
 */

let cells = document.querySelectorAll('.cell');
// console.log(cells);
cells.forEach(function (item) {
    let cell = item as HTMLDivElement;
    cell.addEventListener('click', function (event) {
        // console.log('click'); 
        let target = event.target as HTMLDivElement;
        target.classList.add('x')
    })
})
