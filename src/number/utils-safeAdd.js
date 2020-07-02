/**
 * Date:2020/7/2
 * Desc: Add integers, wrapping at 2^32. This uses 16-bit operations internally to work around bugs in some JS interpreters.
 */
function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
