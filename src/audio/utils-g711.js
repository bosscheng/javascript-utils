const SIGN_BIT = 0x80;
const QUANT_MASK = 0xf;
const NSEGS = 8;
const SEG_SHIFT = 4;
const SEG_MASK = 0x70;
const BIAS = 0x84;
const segEnd = [0xFF, 0x1FF, 0x3FF, 0x7FF, 0xFFF, 0x1FFF, 0x3FFF, 0x7FFF]


function _search(val, table, size) {
    for (let i = 0; i < size; i++) {
        if (val <= table[i]) {
            return i;
        }
    }
    return size
}

// alaw
function _linear2alaw(pcmVal) {
    let mask;
    let seg;
    let aval;
    if (pcmVal >= 0) {
        mask = 0xD5
    } else {
        mask = 0x55

        // pcmVal = -pcmVal - 8;
        pcmVal = (-pcmVal - 1)
        if (pcmVal < 0) {
            pcmVal = 32767
        }
    }
    /* Convert the scaled magnitude to segment number. */
    seg = _search(pcmVal, segEnd, 8)

    if (seg >= 8) {
        return (0x7F ^ mask);
    } else {
        aval = (seg << SEG_SHIFT);

        if (seg < 2) {
            aval |= ((pcmVal >> 4) & QUANT_MASK);
        } else {
            aval |= ((pcmVal >> (seg + 3)) & QUANT_MASK);
        }
        return (aval ^ mask)
    }
}

function _alaw2linear(aVal) {
    let t;
    let seg;

    aVal ^= 0x55;
    t = ((aVal & QUANT_MASK) << 4)
    seg = ((aVal & SEG_MASK) >> SEG_SHIFT);
    switch (seg) {
        case 0:
            t += 8;
            break;
        case 1:
            t += 0x108;
            break;
        default:
            t += 0x108;
            t <<= seg - 1;
    }
    return ((aVal & SIGN_BIT) != 0 ? t : -t);
}


// ulaw
function _linear2ulaw(pcmVal) {
    let mask = 0;
    if (pcmVal < 0) {
        pcmVal = BIAS - pcmVal;
        mask = 0x7F;
    } else {
        pcmVal += BIAS;
        mask = 0xFF;
    }
    let seg = _search(pcmVal, segEnd, 8)
    if (seg >= 8) {
        return (0x7F ^ mask)
    } else {
        let uval = (seg << 4) | ((pcmVal >> (seg + 3)) & 0xF)
        return (uval ^ mask)
    }
}

function _ulaw2linear(uVal) {
    uVal = ~uVal;
    let t = ((uVal & QUANT_MASK) << 3) + BIAS;
    t <<= ((uVal & SEG_MASK) >> SEG_SHIFT)
    return ((uVal & SIGN_BIT) ? (BIAS - t) : (t - BIAS));
}

// pcm to g711a
function g711aEncoder(typedArray) {
    const g711Array = [];
    const tempArray = Array.prototype.slice.call(typedArray);
    tempArray.forEach((i, index) => {
        g711Array[index] = _linear2alaw(i)
    })
    return g711Array;
}

// g711a to pcm(float32Array)
function g711aDecoder(array) {
    const pcmArray = [];
    array.forEach((i) => {
        pcmArray[i] = _alaw2linear(i)
    })
    //
    return pcmArray;
}

// g711u encoder
function g711uEncoder(typedArray) {
    const g711Array = [];
    const tempArray = Array.prototype.slice.call(typedArray);
    tempArray.forEach((i, index) => {
        g711Array[index] = _linear2ulaw(i)
    })
    return g711Array;
}

// g711u decoder
function g711uDecoder(array) {
    const pcmArray = [];
    array.forEach((i) => {
        pcmArray[i] = _ulaw2linear(i)
    })
    //
    return pcmArray;
}
