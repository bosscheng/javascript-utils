/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-03 12:44:27
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-03 18:43:28
*/
#include <iostream>

// 数组声明
int main() {
    using namespace std;
    int years[3];
    years[0] = 1;
    years[1] = 2;
    years[2] = 3;

    int day[3] = { 1, 2, 3 };
    cout << "years[0]=" << years[0] << endl;
    cout << "day[0]=" << day[0] << endl;
    // 计算一个数组长度大小
    short things[] = {1, 2, 3, 4};
    int numbers = (sizeof things) / (sizeof (short));
    cout << numbers << endl;
    return 0;
}