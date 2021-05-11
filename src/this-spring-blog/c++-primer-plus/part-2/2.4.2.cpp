/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-04-09 22:18:00
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-04-09 22:29:51
 */
#include <iostream>

void simon(int);

int main() {
    using namespace std;
    cout << "input param:" << endl;
    int x;
    cin >> x;
    simon(x);
    return 0;
}

void simon(int n) {
    using namespace std;
    cout << "res n:" << n << endl;
}