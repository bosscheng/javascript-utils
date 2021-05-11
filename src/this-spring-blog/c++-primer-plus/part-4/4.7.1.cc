/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-12 22:48:56
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-12 23:33:35
*/
#include <iostream>
int main() {
    using namespace std;
    int count = 100;
    double cpus = 4.5;
    cout << "count value:" << count << " count address:" << &count << endl;
    cout << "cpus value:" << cpus << " cpus address:" << &cpus << endl;

    int test = 200;
    int* test_ptr;
    test_ptr = &test;
    cout << "test value:" << test << " test_ptr value:" << *test_ptr << endl;
    cout << "test address:" << &test << " test_ptr address:" << test_ptr << endl;

    return 0;
}