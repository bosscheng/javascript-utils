/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-31 23:48:59
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-04-01 00:16:05
 */
const http = require('http');
const fs = require('fs');
console.log(O_RDONLY);
const hostname = '127.0.0.1';
const port = 1337;
http.createServer((req, res) => {
    console.log('http');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// 查看Node调试日志  
// NODE_DEBUG=HTTP,STREAM,MODULE,NET node 1-2.js 

// 查看v8日志
// node --trace http.js
