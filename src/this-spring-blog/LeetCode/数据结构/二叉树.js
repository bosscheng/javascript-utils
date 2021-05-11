/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-09-02 12:28:55
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-15 23:07:41
 */
// 二叉树遍历: 前序，中序，后续  
// 代码实现包括：递归，非递归实现前中后序遍历

// 二叉树结构:  
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

// 前序遍历  递归  0 1 3 4 2 5 6
function preOrder(root) {
    if (!root) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}

// 前序遍历 非递归  0 1 3 4 2 5 6
function preOrder2(root) {
    let rt = root;
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack.shift();
        console.log(item.value);
        const left = item.left;
        const right= item.right;
        if (right) {
            stack.unshift(right);
        }
        if (left) {
            stack.unshift(left);
        }
    }
}
// preOrder(root);
// preOrder2(root);

// 中序遍历 递归 3 1 4 0 5 2 6
function middleOrder(root) {
    if (!root) return;
    middleOrder(root.left);
    console.log(root.value);
    middleOrder(root.right);
}

// 中序遍历 非递归 3 1 0 5 2 6
function middleOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        const right = item.right;
        const left = item.left;
        if (left && !left.look) {
            left.look = true;
            stack.push(left);
        } else {
            stack.pop();
            console.log(item.value);
            right && stack.push(right);
        }
    }
}

// middleOrder(root);
// middleOrder2(root);

// 后序遍历 递归 3 4 1 5 6 2 0
function afterOrder(root) {
    if (!root) return;
    afterOrder(root.left);
    afterOrder(root.right);
    console.log(root.value);
}

// 后序遍历 非递归 3 4 1 5 6 2 0
function afterOrder2(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        // console.log(item.value);
        const left = item.left;
        const right = item.right;
        // console.log(left.value, right.value);
        if (left && !left.look) {
            left.look = true;
            stack.push(left);
        } else if (right && !right.look) {
            right.look = true;
            stack.push(right);
        } else if ((!left && !right) || (left && left.look && right && right.look)) {
            stack.pop();
            console.log(item.value);
        } 
        // console.log(stack);
        // break;
    }
}

// afterOrder(root);
// afterOrder2(root);


// 广度度优先搜索 BFS
function BFS(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack.shift();
        const left = item.left;
        const right = item.right;
        console.log(item.value);
        left && stack.push(left);
        right && stack.push(right); 
    }
}
// DFS实现：

// 数据结构：栈

// 父节点入栈，父节点出栈，先右子节点入栈，后左子节点入栈。递归遍历全部节点即可

// BFS实现：

// 数据结构：队列
// BFS(root);

// 深度优先搜索 DFS
function DFS(root) {
    const stack = [];
    stack.push(root);
    while(stack.length > 0) {
        const item = stack[stack.length - 1];
        const left = item.left;
        const right = item.right;
        if (!item.hasprint) {
            console.log(item.value);
           item.hasprint = true;
        }
        if (left && !left.look) {
            left.look = true;
            stack.push(left);
        } else if (right && !right.look) {
            right.look = true;
            stack.push(right);
        } else if ((!left && !right) || (left.look && right.look)) {
            stack.pop();
        }
    }
}

DFS(root);

// 分治应用  
// 理论：先处理局部在处理整体
// 模板：（递归）处理A，处理B....合并结果  
// 归并排序 
const arr = [2,4,1,8,5,9,0];

// 冒泡排序
function maopao(list) {
    for (let i = 0; i < list.length; i += 1) {
        for (let j = i + 1; j < (list.length); j += 1) {
            let temp = 0;
            if (list[i] >= list[j]) {
                temp = list[j];
                list[j] = list[i];
                list[i] = temp;
            }
        }
    }
}

// maopao(arr);
// console.log(arr);

// 归并排序

function sortLRRes(left, right) {
    const max = Math.max(left.length, right.length);
    let res = [];
    let i = 0, j = 0;
    for (;i < max && j < max;) {
        if (left[i] >= right[j]) {
            res.push(left[i]);
            i += 1;
        } else {
            res.push(right[j]);
            j += 1;
        }
    }

    if (left.length === max) {
        res = res.concat(left.slice(i, left.length));
    }
    if (right.length === max) {
        res = res.concat(right.slice(j, right.length));
    }
    return res;
 }

function mergeSort(list) {
    if (list.length <= 1) return [list[0]];
    const mid = parseInt(list.length / 2, 10);
    console.log(' mid:', mid);
    const leftRes = mergeSort(list.slice(0, mid));
    const rightRes = mergeSort(list.slice(mid, list.length));
    const res = sortLRRes(leftRes, rightRes);
    return res;
}
// const res = mergeSort(arr);
// console.log(res);

// 反转
var x = [1,2,3,4];
function reverse(x) {
    for (let i = 0; i < x.length / 2; i += 1) {
        let temp = x[i];
        x[i] = x[x.length - i - 1];
        x[x.length - i - 1] = temp;
    }
    return x;
}
// console.log(reverse(x));
// 数组去重
var y = [1,2,2,3,4,4,5];

function deleteDul(z) {
    const map = new Map();
    const len = z.length
    for (let i = 0; i < len; i += 1) {
        const item = z.shift();
        if (!map.get(item)) {
            z.push(item);
            map.set(item, true);
        }
    }
    return z;
}

// console.log(deleteDul(y));