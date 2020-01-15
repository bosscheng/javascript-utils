/*
* date: 2020-01-15
* desc:
*/
function executeCopy(textValue) {
    const input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = textValue;
    input.select();
    // 将内容复制到剪贴板里面去。
    document.execCommand('Copy');
    input.remove();
}
