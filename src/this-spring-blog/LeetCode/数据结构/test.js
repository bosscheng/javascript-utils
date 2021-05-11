/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-11-30 13:00:04
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-02 14:53:04
*/
// 二叉树结构
const root = {
    value: '0',
    left: {
        value: '1',
        left: {
            value: '3'
        },
        right: {
            value: '4'
        }
    },
    right: {
        value: '2',
        left: {
            value: '5'
        },
        right: {
            value: '6'
        }
    }
};
// 前序  

function preOrder(root) {
    if (!root) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}

function preOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack.pop();
        console.log(item.value);
        if (item.right) stack.push(item.right);
        if (item.left) stack.push(item.left);
    } 
}

preOrder(JSON.parse(JSON.stringify(root)));
preOrder2(JSON.parse(JSON.stringify(root)));


// 中序  

function midOrder(root) {
    if (!root) return;
    midOrder(root.left);

    console.log(root.value);
    midOrder(root.right);
}

function midOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        if (item.left && !item.left.visit) {
            item.left.visit = true;
            stack.push(item.left);
        } else {
            stack.pop();
            console.log(item.value);
            item.right && stack.push(item.right);
        }
    } 
}
console.log('mide');
midOrder(JSON.parse(JSON.stringify(root)));
midOrder2(JSON.parse(JSON.stringify(root)));

// 后序  
function afterOrder(root) {
    if (!root) return;
    afterOrder(root.left);
    afterOrder(root.right);
    console.log(root.value);
}

function afterOrder2(root) {
    console.log('afterOrder2');
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        if (item.left && !item.left.visit) {
            item.left.visit = true;
            stack.push(item.left);
        } else if (item.right && !item.right.visit) {
            item.right.visit = true;
            stack.push(item.right);
        } else {
            console.log(item.value);
            stack.pop();
        }
    }
}

console.log('after');
afterOrder(JSON.parse(JSON.stringify(root)));
afterOrder2(JSON.parse(JSON.stringify(root)));

// 广度优先搜索  
function BFS(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item  = stack.shift();
        console.log(item.value);
        item.left && stack.push(item.left);
        item.right && stack.push(item.right);
    }
}
console.log('BFS');
BFS(JSON.parse(JSON.stringify(root)));

// 深度优先搜索
function DFS(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack.pop();
        console.log(item.value);
        item.right && stack.push(item.right);
        item.left && stack.push(item.left);
    }
}
console.log('DFS');
DFS(JSON.parse(JSON.stringify(root)));