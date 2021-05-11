/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-12 22:00:53
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-12 22:17:25
*/
// 共用体 
#include <iostream>
#include <string>

struct widget {
    int type;
    char brand[20];
    union id {
     long id_num;
     char id_char[20];   
    } id_val;
};

int main() {
    using namespace std;
    widget w;
    w.type = 1;
    w.id_val.id_num = 100;
    if (w.type == 1) {
        // cout << w.id_val.id_num << endl;
    }
    return 0;
}