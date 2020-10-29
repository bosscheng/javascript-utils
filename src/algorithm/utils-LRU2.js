/**
 * Date:2020/4/21
 * Desc:  LRU (最近最少使用) 缓存机制 提供两个方法：获取数据 get 和写入数据 put 。
 * 获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。
 * 写入数据 put(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。
 * 直接使用数组实现。
 */

// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4


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
