function utilsGetAbsoluteURL(url){
    if (!url.match(/^https?:\/\//)) {
        const div = document.createElement('div')
        div.innerHTML = `<a href="${url}">x</a>`
        url = div.firstChild.href;
    }
    return url
}