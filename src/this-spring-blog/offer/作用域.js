/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-04 21:11:25
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-04 21:13:45
*/
// 作用域分类：
// 1. 静态作用域：函数定义时候就确定了  
// 2. 动态作用域：函数运行时候确定  

// 例子一：  
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();


// 例子二：
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();

// 例子一结果：1
// 例子二结果：local scope

// 文献：https://github.com/mqyqingfeng/Blog/issues/3