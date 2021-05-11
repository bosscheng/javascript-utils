/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-03 19:00:10
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-06 13:36:43
 */
#include <iostream>

int main() {
    using namespace std;
    char str[] = {'a', 'b', 'c', 'd', 'e'}; // abcde
    char str2[] = {'a', 'b', 'c', '\0', 'd', 'e'}; // abc
    // 下面这种生命会报错，因为他需要存一个\0，再算上abcd实际上是5个字节了，所以报错
    // 我们推荐使用编译器自己计算的方式 char str3[] = "abcd";
    // char str3[4] = "abcd";
    char str3[] = "ss";
    int str_len = sizeof str; // 5
    int str2_len = sizeof str2; // 6
    int str3_len = sizeof str3; // 长度为3
    cout << "str[]=" << str << endl;
    cout << "str2[]=" << str2 << endl;
    cout << "str_len=" << str_len << endl;
    cout << "str2_len=" << str2_len << endl;
    cout << "str3_len=" << str3_len << endl;
    return 0;
}