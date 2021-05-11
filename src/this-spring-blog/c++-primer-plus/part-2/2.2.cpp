/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-04-07 23:53:47
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-04-08 00:17:12
 */
#include <iostream>  

int main() {
    using namespace std;

    int carrots;
    carrots = 25;
    cout << "i have";
    std::cout << carrots;
    cout << " carrots ";
    std::cout << endl;
    carrots = carrots - 1;
    cout << "current have " << carrots << " carrots." << endl;
    return 0;
}