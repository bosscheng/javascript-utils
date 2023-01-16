function utilsGetUrlRelativePath(href) {
    const url = href || document.location.toString();
    const arrUrl = url.split("//");

    const start = arrUrl[1].indexOf("/");
    let relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符

    if (relUrl.indexOf("?") != -1) {
        relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}