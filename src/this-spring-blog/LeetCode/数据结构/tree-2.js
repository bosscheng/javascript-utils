/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-09 23:46:46
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-10 00:31:11
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

function preOrder(root) {
    if(!root) return;
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
       item.right && stack.push(item.right);
       item.left && stack.push(item.left);
   } 
}

// pre
console.log('pre order');
// preOrder(root);
// preOrder2(root);

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
            stack.push(item.left);
            item.left.visit = true;
        } else {
            console.log(item.value);
            stack.pop();
            item.right && stack.push(item.right);
        }
    }
}

// mid  
console.log('mid');
// midOrder(root);
// midOrder2(root);

function backOrder(root) {
    if (!root) return;
    backOrder(root.left);
    backOrder(root.right);
    console.log(root.value);
}

function backOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        if (item.left && !item.left.visit) {
            stack.push(item.left);
            item.left.visit = true;
        } else if (item.right && !item.right.visit) {
            stack.push(item.right);
            item.right.visit = true;
        } else {
            console.log(item.value);
            stack.pop();
        }
    }
}

// back
console.log('back');
// backOrder(root);
// backOrder2(root);

// bfs
function bfs(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack.shift();
        console.log(item.value);
        item.left && stack.push(item.left);
        item.right && stack.push(item.right);
    }
}

// dfs
function dfs(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack.pop();
        console.log(item.value);
        item.right && stack.push(item.right);
        item.left && stack.push(item.left);
    }
}

console.log('bfs');
// bfs(root);

console.log('dfs');
dfs(root);