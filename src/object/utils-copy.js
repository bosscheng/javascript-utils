// 浅拷贝
function copy(obj) {
    return Object.assign({}, obj);
}

// 或者
// let copy1 = {...obj}

// 浅拷贝
function copy2(obj) {
    return JSON.parse(JSON.stringify(obj));
}
