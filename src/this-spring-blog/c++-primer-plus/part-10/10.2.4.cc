/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-19 22:48:41
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-19 22:59:00
*/ 
#include <iostream>

class Cal
{
    private:
        int addRes;
        int jianRes;
        int chengRes;
        int chuRes;
    public:
        void add(int a, int b);
        void jian(int a, int b);
        void cheng(int a, int b);
        void chu(int a, int b);

        int getAdd();
        int getJian();
};

void Cal::add(int a, int b) {
    addRes = a + b;
}

void Cal::jian(int a, int b) {
    jianRes = a - b;
}

int Cal::getAdd() {
    return addRes;
}

int Cal::getJian() {
    return jianRes;
}

int main() {
    using namespace std;
    Cal cc;
    cc.add(1,2);
    cc.jian(2,1);
    int rr = cc.getAdd();
    int jj = cc.getJian();
    cout << "rr:" << rr << endl;
    cout << "jj:" << jj << endl;
    return 0;
}