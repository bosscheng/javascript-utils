/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-24 17:59:13
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-24 18:07:58
 */ 
#include <iostream>
#include <pthread.h>

using namespace std;

int coutter = 0;
int num = 0;

void* jian(void* args) {
    coutter -= 1;
    cout << "count:" << num << endl;
    return 0;
}

void* jia(void* args) {
    coutter += 1;
    cout << "count: " << num << endl;
    return 0;
}

int main() {
    pthread_t tids[20];
    for (int i = 0; i < 5;i += 1) {
        num += 1;
        int ret = pthread_create(&tids[i], NULL, jia, NULL);
        int ret2 = pthread_create(&tids[i + 5], NULL, jian, NULL);
    }
    pthread_exit(NULL);
    return 0;
}