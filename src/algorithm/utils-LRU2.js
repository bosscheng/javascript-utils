/**
 * Date:2020/10/29
 * Desc:
 */
function LRU2(capacity) {
    this.keys = [];
    this.cache = Object.create(null);
    this.capacity = capacity;
}

LRU2.prototype = {
    get(key) {
        if (this.cache[[key]]) {
            remove(this.keys, key);
            this.keys.push(key);
            return this.cache[key];
        }
        return -1;
    },

    put(key, value) {
        if (this.cache[key]) {
            this.cache[key] = value;
            remove(this.keys, key);
            this.keys.push(key);
        } else {
            this.keys.push(key);
            this.cache[key] = value;
            if (this.keys.length > this.capacity) {
                removeCache(this.cache, this.keys, this.keys[0]);
            }
        }
    }
};


function remove(arr, key) {
    if (arr.length) {
        const index = arr.indexOf(key);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}

function removeCache(cache, keys, key) {
    cache[key] = null;
    delete cache[key];
    remove(keys, key);
}
