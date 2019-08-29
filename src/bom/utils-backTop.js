/*
* date: 2019-08-29
* desc:
*/
/*
 * 返回顶部的实现方式
 * */
var backTop = function (btnId) {
    // $btn
    var btn = document.getElementById(btnId);
    // element
    var d = document.documentElement;
    //  body
    var b = document.body;
    // 监听 scroll 事件
    window.onscroll = set;
    // 默认是隐藏的
    btn.style.display = "none";
    // 按钮被点击了之后
    btn.onclick = function () {
        // 隐藏掉
        btn.style.display = "none";
        // 取消绑定事件
        window.onscroll = null;
        // 每个10ms间隔 往上面移动，当返回到顶部之后，就可以clearInterval 了。
        this.timer = setInterval(function () {
            // 不断计算距离顶部的距离，当距离顶部的距离小于多少之后就可以移除掉了。
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);

            if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);

        }, 10);
    };

    // on scroll 事件
    function set() {
        //
        btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block' : "none";
    }
};
