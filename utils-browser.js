/**
 * browser 上面的方法
 * Author: Administrator
 * Data: 14-12-18
 */

var org = org ||{};

org.utils = org.utils || {}

;(function(util){
    
    // 获取当时时间 格式为 xxxx-yy-hh dd:ss:ee
    util.getNowTime = function(){
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth + 1;
        var day = time.getDate();
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconeds;  
    },
    
    util.client = function(win,userAgent){
        win = win || window;
        userAgent = userAgent || navigator.userAgent;
        
        this.name = "";
        this.version = "";
        this.os = "";
        this.isMobile = "";
        this.width = win.screen.width; // 
        this.height = win.screen.height; // 
        this.showHeight = "";
        this.showWidth = "";
        this.ua = userAgent.toLowerCase();
        
        var self = this;
        // 待定
        (function(self){
            var h = [
                {}
                ];
            
        })(self);
    }
    
})(org.utils)
