function utilsIsAlipay(){
    var ua = window.navigator.userAgent.toLowerCase();
    return !!ua.match(/alipayclient/i)
}

