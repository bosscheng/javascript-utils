/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-19 00:05:16
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-19 00:09:47
*/ 
#include <iostream>

using namespace std;
// 内联函数优化执行速度
// 1. 过程add函数直接copy到main中，这样内存保证是连续的，不用调地址在调用add
// 2. 如果大量使用内联函数可能但是占用大量内存
inline int add(int a, int b) {
    return a + b;
}

int main() {
    int c = add(1,2);
    cout << "c:" << c << endl;
    return 0;
}