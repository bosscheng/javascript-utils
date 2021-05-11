<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-20 20:53:22
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-20 21:29:10
-->
## 前言  
直播过程中我们需要将大量的YUV数据渲染到canvas上，以前通常的做法是在webworker中进行解码，然后将数据交付给主线程，利用webgl进行绘制YUV，这样有两个问题，第一worker线程将解码出来的YUV传递给主线程，由于web端不能共享内存，所以使用的是拷贝方式消耗时间和空间。第二我们在主线程渲染YUV数据会过多占用主线程执行时间导致UI卡顿问题。  

OffscreenCanvas这个对象可以摆脱我们在主线程渲染这种耗性能的操作。  

## OffscreenCanvas使用  

https://developer.mozilla.org/zh-CN/docs/Web/API/OffscreenCanvas#browser_compatibility  

MDN详细介绍了它的使用，这里我们着重要学习一个它的两种渲染模式。  

### 同步渲染  
仍然是在主线程，不过是通过构造OffscreenCanvas对象，首先将数据渲染到该对象上，然后在通过transferToImageBitmap和transferFromImageBitmap这两个Api分别从OffscreenCanvas上获取bitmap对象然后在赋值给canvas。例子如下：  
```
<canvas id="one"></canvas>
<canvas id="two"></canvas>

var one = document.getElementById("one").getContext("bitmaprenderer");
var two = document.getElementById("two").getContext("bitmaprenderer");

var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext('webgl');

// ... some drawing for the first canvas using the gl context ...

// Commit rendering to the first canvas
var bitmapOne = offscreen.transferToImageBitmap();
one.transferFromImageBitmap(bitmapOne);

// ... some more drawing for the second canvas using the gl context ...

// Commit rendering to the second canvas
var bitmapTwo = offscreen.transferToImageBitmap();
two.transferFromImageBitmap(bitmapTwo);
```

### 异步渲染  
异步渲染是在webworker操作canvas对象实现对webworker中对YUV进行实时渲染。首先通过canvas的transferControlToOffscreen这个API获取到离屏对象offscreen，然后通过主线程的postMessage把offscreen发送给webworker。webworker拿到该对象后利用webgl开始渲染。  

```
var htmlCanvas = document.getElementById("canvas");
var offscreen = htmlCanvas.transferControlToOffscreen();

var worker = new Worker("offscreencanvas.js");
worker.postMessage({canvas: offscreen}, [offscreen]);

onmessage = function(evt) {
  var canvas = evt.data.canvas.
  var gl = canvas.getContext("webgl");

  // ... some drawing using the gl context ...

  // Push frames back to the original HTMLCanvasElement
  gl.commit();
};
```

## 实战  

本节我们通过三个例子来说明，使用OffscreenCanvas好处。  
- 第一个例子我们在主线程不使用离屏渲染利用webgl绘制yuv数据到canvas上
- 第二个例子我们在主线程使用离屏渲染利用webgl绘制yuv数据到canvas上
- 第三个例子我们利用离屏渲染在webworker中利用webgl绘制yuv数据到canvas上
### 主线程webgl直接渲染yuv