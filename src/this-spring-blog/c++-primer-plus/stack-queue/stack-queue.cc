/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-02 15:36:16
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-02 15:50:43
 */
#include <stack>
#include <queue>
#include <iostream>

using namespace std;


int main() {
    // s.empty()               如果栈为空返回true，否则返回false
    // s.size()                返回栈中元素的个数
    // s.pop()                 删除栈顶元素但不返回其值
    // s.top()                 返回栈顶的元素，但不删除该元素
    stack<int> std;
    // q.empty()               如果队列为空返回true，否则返回false
    // q.size()                返回队列中元素的个数
    // q.pop()                 删除队列首元素但不返回其值
    // q.front()               返回队首元素的值，但不删除该元素
    // q.push()                在队尾压入新元素
    // q.back()                返回队列尾元素的值，但不删除该元素
    queue<int> q;
    for (int i = 0; i < 10; i += 1) {
        std.push(i);
        q.push(i);
    }
    cout << " stack empty:" << std.empty() << endl;
    cout << " stack size:" << std.size() << endl;
    cout << " stack top:" << std.top() << endl;
    std.pop();
    cout << " after pop stack top:" << std.top() << endl;
    cout << " queue empty:" << q.empty() << endl;
    cout << " queue size:" << q.size() << endl;
    cout << " queue front:" << q.front() << endl;
    q.pop();
    cout << " after pop queue front:" << q.front() << endl;
    cout << " queue back:" << q.back() << endl;
}

