let pipe = require('../src/utils-pipe')



//
function b(data) {
    console.log('b')
    return data + ',b'
}

//
function c(data) {
    console.log('c')
    return data + ',c'
}

let result = pipe('a', b, c);
console.log(result)
// c(b('a'));
