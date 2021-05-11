<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-07-14 12:04:55
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-07-14 14:29:30
--> 
## 前端该了解的libuv  

### 什么是libuv 

libuv是一个高性能的，事件驱动的I/O库，并且提供了跨平台（如windows, linux）的API。 

### 什么人需要libuv  

1. 系统程序员，会编写一些底层的程序，例如守护进程或者网络服务器／客户端。你也许发现了event-loop很适合于你的应用场景，然后你决定使用libuv。

2. 一个node.js的模块开发人员，决定使用C/C++封装系统平台某些同步或者异步API，并将其暴露给Javascript。你可以在node.js中只使用libuv。但你也需要参考其他资源，因为本书并没有包括v8/node.js相关的内容。

### libuv编译  

#### clone libuv
从github上clone该库：https://github.com/libuv/libuv.git  

#### 编译  
如果你是前端程序员可能对编译不是很了解，在使用一个c或者c++库的时候需要经过编译成静态库或者动态库来使用。关于编译可以参考我以前的文章。  
一个标准提供给你别人使用的库编译过程大概如下几步，拿libuv为例：  
在README.md描述为：  
```
$ sh autogen.sh
$ ./configure
$ make
$ make check
$ make install
```  

1. sh autogen.sh : 生成 configure 脚本  

2. ./configure : 检查系统配置，例如你是否安装gcc或者g++编译工具

3. make : 执行代码的编译操作，生成可执行的二进制

4. make check : 进行一些测试

5. make install : 安装编译生成的文件到本地，我的是mac默认安装(头文件： /usr/local/include/uv.h, 静态库：/usr/local/lib)  

### 使用libuv库  

```
#include <stdio.h>
#include <stdlib.h>
#include <uv.h>

int main() {
    uv_loop_t *loop = malloc(sizeof(uv_loop_t));
    uv_loop_init(loop);

    printf("Now quitting.\n");
    uv_run(loop, UV_RUN_DEFAULT);

    uv_loop_close(loop);
    free(loop);
    return 0;
}
```  

如果你的libuv库通过make install安装了，那么执行：  
```
gcc main.c -o main.a
```  

gcc是c语言的编译工具，其中有很多参数详细参考下面的链接。  

如果你的libuv库没有通过make install只是make了，那么你可以执行：  

```
gcc main.c -o main.a -I/Users/xuxiuquan/github/libuv/.libs  -L/Users/xuxiuquan/github/libuv/.libs/ -luv
```  

gcc参数-I代表静态库的位置，-L代表头文件位置，-l代表库的名称。  
编译过程中对头文件和库的查找过程是：  
```
1. 先搜索当前目录  
2. 然后搜索-I指定的目录
3. 再搜索gcc的环境变量CPLUS_INCLUDE_PATH（C程序使用的是C_INCLUDE_PATH）
4. 最后搜索gcc的内定目录（/usr/include，/usr/local/include，）
```  

-l后面为什么是uv？  
libuv的文件名是libuv.a。前缀lib和后缀.a是标准的，uv是基本名称，GCC 会在-l选项后紧跟着的基本名称的基础上自动添加这些前缀、后缀，本例中，基本名称为uv。 

如何解决make: Nothing to be done for `all' 的方法  

那就要看makefile的规则啦。makefile的规则是所想产生的文件需要依赖很多 .o文件。若文件没有改动，.o文件也没有改动，则Linux认为，我不需要对所有的文件做任何事情。如果想让他重新编译，先执行make clean即可


### 总结  

- 介绍了libuv用图
- 介绍了libuv编译方式以及使用
- 介绍了gcc编译基本过程
- 后面会讲解libuv实际使用如果能力够会分析一些源码

### 参考  

- http://c.biancheng.net/view/2382.html  
- https://github.com/libuv/libuv  
- https://blog.csdn.net/andy205214/article/details/77091871
- https://luohaha.github.io/Chinese-uvbook/source/introduction.html
