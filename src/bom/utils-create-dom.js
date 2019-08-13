/*
* date: 2019-08-04
* desc:
*/

const TABLE = document.createElement('table');
const TABLE_TR = document.createElement('tr');

const FRAGMENT_REG = /^\s*<(\w+|!)[^>]*>/;

const CONTAINERS = {
    tr: document.createElement('tbody'),
    tbody: TABLE,
    thead: TABLE,
    tfoot: TABLE,
    td: TABLE_TR,
    th: TABLE_TR,
    "*": document.createElement('div')
};

function createDom(str) {
    let name = FRAGMENT_REG.test(str) && RegExp.$1;

    if (!(name in CONTAINERS)) {
        name = '*';
    }

    const container = CONTAINERS[name];
    str = str.replace(/(^\s*)|(\s*$)/g, '');
    container.innerHTML = '' + str;
    const dom = container.childNodes[0];
    container.removeChild(dom);
    return dom;
}
