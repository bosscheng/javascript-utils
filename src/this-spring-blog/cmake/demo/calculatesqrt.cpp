/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-01 15:00:08
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-01 16:05:33
 */
#include <stdio.h> 
#include <stdlib.h> 
#include <string> 
#include <iostream> 
#include <math.h> 
#include "CalculateSqrtConfig.h" 

int main(int argc, char* argv[]){ 
    if(argc<2){ 
        std::cout << argv[0] << " Version " << CalculateSqrt_VERSION_MAJOR << "." 
              << CalculateSqrt_VERSION_MINOR << std::endl; 
        fprintf(stdout, "Uage: %s number\n", argv[0]); 
        return 1; 
    } 
    double inputValue = atof(argv[1]); 
    double outputValue = sqrt(inputValue); 
    fprintf(stdout, "The square root of %g is %g\n",inputValue, outputValue); 
    return 0; 
}