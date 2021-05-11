<!--
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-05-11 23:02:03
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-06-21 22:59:32
 -->
# electron使用笔记  

## 使用  

electron有两个进程，main-process主进程负责和node的native模块交互，render-process负责渲染界面（其实render进程也可以调用node模块不过我们不提倡这样做，目的是让render进程有一个更加贴近于web原生）。  

main-process和render-process之间通过IPC通信

## main-process相关  

### webPreferences配置  

```
  webPreferences: {
    nodeIntegration: true, // render-process是否允许使用node
    webSecurity: false, // 是否开启web安全（跨域等）
    webgl: true, // 是否允许使用webgl
    devTools: true, // 是否显示调试模式，对应F12
    sandbox: false, // 沙盒
  }
```

### path相关  

```
  const appPath = app.getAppPath();
  const homePath = app.getPath('home');
  const userDataPath = app.getPath('userData');
  const appDataPath = app.getPath('appData');
  const desktopPath = app.getPath('desktop');
  const exePath = app.getPath('exe');
```

