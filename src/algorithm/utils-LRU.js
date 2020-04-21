/**
 * Date:2020/4/21
 * Desc:  LRU (最近最少使用) 缓存机制 提供两个方法：获取数据 get 和写入数据 put 。
 * 获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。
 * 写入数据 put(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。
 *
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


function LRU(max) {
    this.max = max;
    this.cache = new Map();
}


LRU.prototype = {
    get(key) {
        const {cache} = this;
        const value = cache.get(key);
        if (!value) return -1;
        // 移动位置。
        cache.delete(key);
        // update last index
        cache.set(key, value);
        return value;
    },

    put(key, value) {
        const {cache} = this;
        if (cache.size > this.max - 1) {
            // 获取队列的第一个元素
            // 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
            // 每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，
            // 就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
            const keys = cache.keys().next().value;
            // 直接删除。
            cache.delete(keys);
        }
        cache.set(key, value);
    }
};


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
