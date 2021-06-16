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