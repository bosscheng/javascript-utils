/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-04-10 00:29:20
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-04-10 00:35:29
 */
#include <iostream>

using namespace std;

void console_str1();
void console_str2();
void console_str3();
void console_str4();

int main() {
    for (int i = 0; i < 2; i += 1) {
        console_str1();
    }
    for (int i = 0; i < 2; i += 1) {
        console_str3();
    }
    return 0;
}

void console_str1() {
    cout << "Three blind mice" << endl;
}

void console_str2() {
    cout << "Three blind mice" << endl;
}

void console_str3() {
    cout << "See how they run" << endl;
}

void console_str4() {
    cout << "See how they run" << endl;
}