/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-07 23:55:45
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-08 00:30:43
 */
#include <iostream>
#include <string>

using namespace std;

struct Animal {
    string name;
    int age;
};

struct Person {
    char name[20];
    int age;
    float w;
};

int main() {
    Person p = {
        "xxq",
        11,
        11.001
    };
    Animal a = {
        "cat",
        1000
    };
    cout << p.age << endl;
    cout << a.age << endl;
    // Person p = (Person)malloc(100);
    // p.name = 'xxq2';
    // p.age = 11;
    // p.w = 11.0203;
    return 0;
}