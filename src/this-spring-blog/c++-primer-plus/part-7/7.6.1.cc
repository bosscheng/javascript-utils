/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-18 22:39:00
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-18 22:58:18
 */ 
#include<iostream>
#include<string>

using namespace std;

struct  person
{
    string name;
    int age;
};

// 值不会改变
void change_name_fake(person p1) {
    p1.age = 100;
}

// 值会改变
void chang_name(person *p1) {
    p1->age = 200;
}

int main() {
    person pp;
    pp.age = 100;
    pp.name = "123";
    chang_name(&pp);
    cout << "pp age:" << pp.age << " pp name:" << pp.name << endl;
    return 0;
}