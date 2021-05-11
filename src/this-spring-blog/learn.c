/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-11-21 16:13:52
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-11-21 16:38:12
 */
#include "stdio.h"
#include "stdlib.h"

int add(int n1, int n2) {
    return n1 + n2;
}

int jian(int n1, int n2) {
    return n1 - n2;
}

void main() {
    // + 
    int c = add(10, 20);
    // -
    int d = jian(20, 10);
    printf("加法结果等于：%d\n ", c);
    printf("减法结果等于：%d\n ", d);
    // 
    int sum = 0;
    int i = 0;
    for (; i < 10; i += 1)
        sum += i;
        printf("i:%d, sum:%d\n", i, sum);
}