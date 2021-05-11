/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-20 00:28:12
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-20 00:51:18
*/ 
#include <iostream>
using namespace std;

class Test {
    private:
        int age;
    public:
        int getAge();
        Test();
        ~Test();

};

    Test::Test(void) {
        age = 100;
    };
    int Test::getAge() {
        return age;
    };
    Test::~Test() {
        cout << "exe ~Test" << endl;
    };

void exeFunc() {
    Test test;
    cout << " exeFunc age:" << test.getAge() << endl;
}

int main() {
    exeFunc();
    return 0;
}