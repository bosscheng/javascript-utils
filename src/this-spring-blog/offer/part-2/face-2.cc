/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-06-17 00:26:18
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-06-18 00:36:41
 */ 
// 面试题2 单例模式  
#include <iostream>

using namespace std;
// 单例模式1，只适用于单线程，如果多线程同时有两个线程访问if (instance == NULL)那么就会实例化两个
// class Singleton {
//     private:
//         Singleton(){};
//         static Singleton *instance;
//         static int count;
//     public:
//         static Singleton* getInstance() {
//             if (instance == NULL) {
//                 instance = new Singleton();
//             }
//             return instance;
//         };
//         void getCount() {
//             count += 1;
//             cout << "count: " << count << endl;
//         }
// };

// int Singleton::count = 0;
// Singleton* Singleton::instance = NULL;

// int main() {
//     Singleton* s = Singleton::getInstance();
//     s->getCount();
//     Singleton* s1 = Singleton::getInstance();
//     s1->getCount();
//     return 0;
// }

// 单例模式2，适用于多线程