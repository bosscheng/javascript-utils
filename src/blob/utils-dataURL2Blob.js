function dataURL2Blob(fileDataURL) {
    let arr = fileDataURL.split(','),
        //获取图片类型
        mime = arr[0].match(/:(.*?);/)[1],
        // 解码base64，该方法返回一个解码的字符串。
        bstr = atob(arr[1]),

        n = bstr.length,
        // Uint8Array 数组类型表示一个8位无符号整型数组，创建时内容被初始化为0。
        // 创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。
        u8arr = new Uint8Array(n);
    //将字符转换成unicode值
    while(n --) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    // Blob() 构造函数返回一个新的 Blob 对象。 blob的内容由参数数组中给出的值的串联组成。
    return new Blob([u8arr], {type: mime})
}