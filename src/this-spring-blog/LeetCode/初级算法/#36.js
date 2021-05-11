/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-10-14 00:21:06
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-10-14 00:33:18
 */
// https://leetcode-cn.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

const test = [[".", "8", "7", "6", "5", "4", "3", "2", "1"], ["2", ".", ".", ".", ".", ".", ".", ".", "."], ["3", ".", ".", ".", ".", ".", ".", ".", "."], ["4", ".", ".", ".", ".", ".", ".", ".", "."], ["5", ".", ".", ".", ".", ".", ".", ".", "."], ["6", ".", ".", ".", ".", ".", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."], ["8", ".", ".", ".", ".", ".", ".", ".", "."], ["9", ".", ".", ".", ".", ".", ".", ".", "."]]

var isValidSudoku = function (board) {
    const row = [];
    const col = [];
    const circle = [];
    for (let i = 0; i < 10; i += 1) {
        row.push(new Map());
        col.push(new Map());
        circle.push(new Map());
    }
    for (let m = 0; m < 9; m += 1) {
        for (let n = 0; n < 9; n += 1) {
            const item = board[m][n];
            const circlemIndex = parseInt(m / 3);
            const circlenIndex = parseInt(n / 3);
            if (item === '.') continue;

            if (row[m].get(item)) {
                console.log(item, m, n, circlemIndex, circlenIndex, ' row');
                return false;
            };
            if (col[n].get(item)) {
                console.log(item, m, n, circlemIndex, circlenIndex,  ' col', col);
                return false;
            } 
            if (circle[circlemIndex * 3 + circlenIndex].get(item)) {
                console.log(item, m, n, circlemIndex, circlenIndex, ' circle');
 
                return false;
            }
            row[m].set(item, 1);
            col[n].set(item, 1);
            circle[circlemIndex * 3 + circlenIndex].set(item, 1);
        }
    }
    return true;
};

const res = isValidSudoku(test);
console.log(res);