/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-03 00:23:52
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-03 01:06:34
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
        item.right && stack.push(item.right);
        item.left && stack.push(item.left);
    }
}
console.log('pre');
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

console.log('mid');
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
            stack.pop();
            console.log(item.value);
        }
    }
}
console.log('after');
afterOrder((JSON.parse(JSON.stringify(root))));
afterOrder2(JSON.parse(JSON.stringify(root)));