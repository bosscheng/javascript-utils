function utilsMergeBuffer(...buffers) {
    const Cons = buffers[0].constructor;

    /**
     *  3.7 | 0  //3
     *  1.1 | 0 //1
     */
    return buffers.reduce((pre, val) => {
        const merge = new Cons((pre.byteLength | 0) + (val.byteLength | 0));
        merge.set(pre, 0);
        merge.set(val, pre.byteLength | 0);
        return merge;
    }, new Cons());
}

function utilsMergeBuffer$1(...buffers){
    let totalLength = 0;
    const Cons = buffers[0].constructor;

    for (let arr of buffers) {
        totalLength += arr.length;
    }
    let result = new Cons(totalLength);
    let offset = 0;
    for (let arr of buffers) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}