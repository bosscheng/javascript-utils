/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-06-21 22:59:44
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-06-21 23:02:56
 */
#include <stdlib.h> 
#include <stdio.h>
#include <unistd.h>

int main() {
    // 每个实际用户ID的最大进程数
    long res = sysconf(_SC_CHILD_MAX);
    printf(" res:%ld", res);
    return 0;
}