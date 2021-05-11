/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-10 23:41:54
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-10 23:42:52
 */
#include <stdio.h>
#include <stdlib.h>
#include <sys/socket.h>
#include <string.h>
#include <netinet/in.h>
#include <errno.h>

void main()
{
    
    printf("hello world\n");
    
    // step 1 , create socket
    int sockfd;
     
     //创建套接字
    if ((sockfd = socket(AF_INET, SOCK_STREAM, 0)) < 0 ) {
        printf("socket failed!!!\n");
        exit(0);
    }
    
    // step 2, package the http request
    char request[512] = {0};
    memset(request, 0, 512);
    strcat(request, "GET ");
    strcat(request, "/index.htm");
    strcat(request, " HTTP/1.1\n");
    strcat(request, "Host: ");
    strcat(request, "www.baidu.com");
    strcat(request, "\nContent-Type: text/html\n");
    strcat(request, "Content-Length: 0\n");
    strcat(request, "\r\n");
    printf("-------------\n%s\n",request);
    
    
    // step 3, connect and send http request.
    struct sockaddr_in servaddr;
    int writeRet;
    
    bzero(&servaddr, sizeof(servaddr));
    servaddr.sin_family = AF_INET;
    servaddr.sin_port = htons(80);
    
    if (inet_pton(AF_INET, "192.168.221.30", &servaddr.sin_addr) <= 0 ){
        printf("inet_pton error!\n");
        exit(0);
    }

    if (connect(sockfd, (struct sockaddr *)&servaddr, sizeof(servaddr)) < 0){
        printf("connect error!\n");
        exit(0);
    }

    writeRet = write(sockfd, request, strlen(request));
    if (writeRet < 0) {
        printf("make http error:%d,%s\n", errno, strerror(errno));
        exit(0);
    }

    printf(">>>>>>> success with %d byte(s) <<<<<<<\n", writeRet);
    
    
    // step 4, read response
    
    struct timeval tv;
    int selectRet = 0;
    fd_set t_set1;
    
    sleep(2);
    
    tv.tv_sec= 0;
    tv.tv_usec= 0;

    FD_ZERO(&t_set1);
    FD_SET(sockfd, &t_set1);
    
    selectRet = select(sockfd + 1, &t_set1, NULL, NULL, &tv);

    if (selectRet < 0) {
        close(sockfd);
        printf("select failed!\n");
        return;
    }

    if (selectRet > 0){
        char buf[4096] = {0};
        int readLen = 0;

        memset(buf, 0, 4096);
        readLen = read(sockfd, buf, 4095); // read once only!
        printf("readLen:%d\n", readLen);
        printf("\n\n%s\n\n", buf);
    }

    close(sockfd);
    
    printf("Bye!\n");
}
