/**
 * 合并bufferList,每个buffer需要前面添加一个字节的头信息，记录这个 buffer 的长度
 * @param list { [ArrayBuffer]}
 * @returns {ArrayBuffer}
 */
function mergeBufferList(list) {
  let length = 0;
  for (let i = 0; i < list.length; i++) {
    length += (list[i].byteLength + 1);
  }
  let buffer = new ArrayBuffer(length);
  let view = new Uint8Array(buffer);
  let offset = 0;
  for (let i = 0; i < list.length; i++) {
    view[offset++] = list[i].byteLength;
    view.set(new Uint8Array(list[i]), offset);
    offset += list[i].byteLength;
  }
  return buffer;
}

// 拆分buffer，每个buffer的前面一个字节是这个buffer的长度
// 返回一个buffer数组，每个buffer 是一个 ArrayBuffer
/**
 *
 * @param buffer {ArrayBuffer}
 * @returns {ArrayBuffer[]}
 */
function splitBuffer(buffer) {
  let view = new Uint8Array(buffer);
  let offset = 0;
  let list = [];
  while (offset < view.length) {
    let len = view[offset++];
    const buffer = new ArrayBuffer(len);
    new Uint8Array(buffer).set(view.slice(offset, offset + len));
    list.push(buffer);
    offset += len;
  }
  return list;
}
