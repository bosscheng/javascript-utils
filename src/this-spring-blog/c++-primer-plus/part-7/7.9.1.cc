/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-18 23:12:24
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-18 23:24:16
 */ 
#include <iostream>

using namespace std;

void add(int a, int b) {
    int c = a + b;
    // cout << "c:" << c << endl;
}

void exe(void (*ap)(int, int)) {
    ap(1,2);
}

int mian() {
    // void (*ap) (int, int);
    // (*ap)(1, 2);
    exe(add);
    return 0;
}