function utilsHtmlDecode(s){
    let div = document.createElement("div");
    div.innerHTML = s;
    return div.innerText || div.textContent;
}

// let res = htmlDecode('&lt;script&gt;alert(1)&lt;/script&gt;')