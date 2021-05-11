/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-30 10:32:53
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-30 10:32:57
 */
#include <node.h>
#include <v8.h>
using namespace v8;
void Method(const v8::FunctionCallbackInfo<Value>& args) {
Isolate* isolate = Isolate::GetCurrent();
HandleScope scope(isolate);
args.GetReturnValue().Set(String::NewFromUtf8(isolate, ” nodejs native hello world “));
}

void Init(Handle<Object> exports) {
Isolate* isolate = Isolate::GetCurrent();
exports->Set(String::NewFromUtf8(isolate, “hello”),
FunctionTemplate::New(isolate, Method)->GetFunction());
}

NODE_MODULE(hello, Init)