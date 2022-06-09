/**
 *  @description 返回url刷新。从服务器重新加载页面，而绕过浏览器HTTP缓存。
 */
function utilsGoBackClearCache(){
    window.addEventListener("pageshow", (e) => e.persisted && location.reload());
}