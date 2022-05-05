/*
 * @Author: your name
 * @Date: 2020-10-30 16:19:38
 * @LastEditTime: 2020-10-30 18:01:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \code\Tic Tac Toe\index.ts
 */
var cells = document.querySelectorAll('.cell');
// console.log(cells);
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', function (event) {
        // console.log('click'); 
        var target = event.target;
        target.classList.add('x');
    });
});
