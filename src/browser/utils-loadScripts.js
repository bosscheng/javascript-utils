function loadJS(files, done) {
    // 获取head标签
    const head = document.getElementsByTagName('head')[0];
    Promise.all(files.map(file => {
        return new Promise(resolve => {
            // 创建script标签并添加到head
            const s = document.createElement('script');
            s.type = "text/javascript";
            s.async = true;
            s.src = file;
            // 监听load事件，如果加载完成则resolve
            s.addEventListener('load', (e) => resolve(), false);
            head.appendChild(s);
        });
    })).then(done);  // 所有均完成，执行用户的回调事件
}
