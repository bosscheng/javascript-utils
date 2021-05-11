<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-07 17:34:09
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-07 17:45:31
-->
## http的keep-alive  

keep-alive可以达到多个http请求复用一个tcp链接，但是相比于wss来说，它不能做到客户端和服务端随时收发。

## wss  

建立连接过程：  
首先客户端发起:  
```
Upgrade: websocket
Connection: Upgrade

Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```

Upgrade: websocket、Connection: Upgrade这两个请求头，表示我要建立wss长连接    

Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==：用来告诉服务端我会验证是否是真的websocket    
Sec-WebSocket-Protocol: chat, superchat    
Sec-WebSocket-Version: 13 ：用来告诉服务端支持ws版本  


然后服务端回应：  

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```  

回应该头表示建立连接