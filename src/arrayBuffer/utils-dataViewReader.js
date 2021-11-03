class UtilsDataViewReader {
    constructor() {
    }

    // 转换成 dataView 数据格式
    _read(buf) {
        let byteOffset = 0;
        if (ArrayBuffer.isView(buf)) {
            byteOffset = buf.byteOffset
            buf = buf.buffer
        }

        return new DataView(buf, byteOffset);
    }

    /**
     * Gets an unsigned 8-bit integer (unsigned byte).
     * @param buffer [ArrayBuffer | Uint8Array]
     * @param byteOffset [number] The offset, in byte, from the start of the view where to read the data.
     * @returns {number}
     */
    readUint8(buffer, byteOffset) {
        return this._read(buffer).getUint8(byteOffset)
    }

    /**
     * Gets an unsigned 16-bit integer (unsigned long).
     * @param buffer [ArrayBuffer | Uint8Array]
     * @param byteOffset [number] The offset, in byte, from the start of the view where to read the data.
     * @param littleEndian [boolean]
     * @returns {number}
     */
    readUint16(buffer, byteOffset, littleEndian = false) {
        return this._read(buffer).getUint16(byteOffset, littleEndian)
    }

    /**
     * Gets an unsigned 32-bit integer (unsigned long).
     * @param buffer [ArrayBuffer | Uint8Array]
     * @param byteOffset [number] The offset, in byte, from the start of the view where to read the data.
     * @param littleEndian [boolean]
     * @returns {number}
     */
    readUint32(buffer, byteOffset, littleEndian = false) {
        return this._read(buffer).getUint32(byteOffset, littleEndian);
    }
}