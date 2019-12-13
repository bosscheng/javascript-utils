/*
* date: 2019-12-13
* desc:
*/

const ua = navigator.userAgent

const userAgent = {
    isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    isAndroid: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1, // android终端
    isWX: ua.indexOf('MicroMessenger') > -1, // 是否微信 （2015-01-22新增）
    isQQ: ua.match(/\sQQ/i) === ' qq' // 是否QQ
}
