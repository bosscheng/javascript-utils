/*
* date: 2020-01-15
* desc:
*/
function contains(a, b) {
    let adown = a.nodeType === 9 ? a.documentElement : a;

    let bup = b && b.parentNode;
    return a === bup || !!(bup && bup.nodeType === 1 && adown.contains(bup));
}
