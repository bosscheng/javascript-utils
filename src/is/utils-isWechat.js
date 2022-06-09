function utilsIsWechat(){
    var ua = window.navigator.userAgent.toLowerCase();
    return !!ua.includes("micromessenger")
}