/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-27 13:17:59
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-27 13:26:52
 */
let HeapSize = 0;
function MaxHeapify(arr, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
    if (left < HeapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < HeapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, i, largest);
        MaxHeapify(arr, largest);
    }
}

function swap(arr, i, largest) {
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
}

function BuildMaxHeap(arr) {
    HeapSize = arr.length;
    for (let i = Math.floor((HeapSize + 1) / 2); i >= 0; i --) {
       MaxHeapify(arr, i); 
    }
}

function HeapSort(arr) {
    BuildMaxHeap(arr);
    for (let i = arr.length - 1; i >= 0; i --) {
        swap(arr, 0, i);
        HeapSize --;
        MaxHeapify(arr, 0);
    } 
}

const test = [3,5,1,2,4,7,8,3,0];
HeapSort(test);
console.log(test);