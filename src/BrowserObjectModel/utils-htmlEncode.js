/**
 * @description html编码。
 * @author Yu-Root
 * @version 0.0.1
 * @param {String} html 必传，需要编码的html。
 *
 */
function utilsHtmlEncode(str){
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

//let res = htmlEncode('<script>alert(1)<\/script>')