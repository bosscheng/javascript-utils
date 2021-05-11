/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-07-08 00:59:18
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-07-14 01:02:46
 */ 

// gcc main.c -o main.a -I/Users/xuxiuquan/github/libuv/.libs  -L/Users/xuxiuquan/github/libuv/.libs/ -luv
// https://blog.csdn.net/xuq09/article/details/87703939
#include <stdio.h>
#include <stdlib.h>
#include <uv.h>

int main() {
    uv_loop_t *loop = malloc(sizeof(uv_loop_t));
    uv_loop_init(loop);

    printf("Now quitting.\n");
    uv_run(loop, UV_RUN_DEFAULT);

    uv_loop_close(loop);
    free(loop);
    return 0;
}