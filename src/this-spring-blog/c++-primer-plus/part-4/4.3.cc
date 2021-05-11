/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-05 20:54:08
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-05 21:50:07
 */
#include <iostream>
#include <string>

using namespace std;

void char_string_copy() {
    // char和string的copy
    char chr1[20];
    char chr2[20] = "12345678910";
    // chr1 = chr2; 报错char声明类型有点像const
    string str1;
    string str2 = "123456";
    std::strcpy(chr1, chr2); // 该函数copy char * 类型
    str1 = str2;
    cout << "chr1:" << chr1 << endl;
    cout << "chr2:" << chr2 << endl;
    cout << "str1:" << str1 << endl;
    cout << "str2:" << str2 << endl;
}

void char_string_cat() {
    char chr1[20] = "qqq";
    char chr2[20] = "123";
    string str1 = "qqq";
    string str2 = "12345678";
    str2 += str1;
    strcat(chr2, chr1);
    cout << "chr1:" << chr1 << endl;
    cout << "chr2:" << chr2 << endl;
    cout << "str1:" << str1 << endl;
    cout << "str2:" << str2 << endl;
}

void char_string_size() {
    // 计算char或者string长度
    char chr1[20] = "1234chr";
    string str1 = "1234str";
    int chr1_len = strlen(chr1);
    int str1_len = str1.size();
    cout << "chr1 siz:" << chr1_len << endl;
    cout << "str2 size" << str1_len << endl;
}

int main() {
    char_string_copy();
    char_string_cat();
    char_string_size();
    return 0;
}