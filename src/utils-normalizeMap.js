/*
* date: 2019-07-27
* desc: normalize map
*/
function normalizeMap(map) {
    return Array.isArray(map) ?
        map.map(key => ({key, val: key})) :
        Object.keys(map).map(key => ({key, val: map[key]}));
}
