cmake_minimum_required(VERSION 3.10) 

# 工程名字
project(CalculateSqrt VERSION 1.0)
configure_file(CalculateSqrtConfig.h.in CalculateSqrtConfig.h) 

# 设置c++标准  
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)  

# 第一个参数工程名字， 第二个参数文件名字
add_executable(CalculateSqrt calculatesqrt.cpp) 

# 指定项目编译时候include的文件路径
# PROJECT_BINARY_DIR变量为编译发生的目录也就是make执行的目录
# PROJECT_SOURCE_DIR变量为工程所在目录
target_include_directories(CalculateSqrt PUBLIC
                            "${PROJECT_BINARY_DIR}"
                            )