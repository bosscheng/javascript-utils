/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-13 23:23:18
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-05-14 00:07:08
 */
#include <node.h>

namespace __callback__ {
  using v8:: FunctionCallbackInfo;
  using v8:: Function;
  using v8:: Null;
  using v8:: Isolate;
  using v8:: Local;
  using v8:: Object;
  using v8:: String;
  using v8:: Value;

  void Runcallback(const FunctionCallbackInfo<Value>& args) {
   Isolate* isolate = args.GetIsolate();
   Local<Function> cb = Local<Function>::Cast(args[0]);
   const unsigned argc = 1;
   Local<Value> argv[argc] = { String::NewFromUtf8(isolate, "hello world") };
//    cb->Call(Null(isolate), argc, argv, argv);   
    args.GetReturnValue().Set(String::NewFromUtf8(isolate, "hellow world"));
  }

  void init(Local<Object> exports, Local<Object> module) {
      NODE_SET_METHOD(module, "exports", Runcallback);
  }

  NODE_MODULE(callback, init)
}