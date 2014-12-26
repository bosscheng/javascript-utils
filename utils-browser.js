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
    }
    
})(org.utils)
