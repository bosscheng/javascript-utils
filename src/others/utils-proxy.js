/*
* date: 2020-02-10
* desc:
*/
class Dep {
    constructor() {
        this.subs = [];
    }

    addSub(sub) {
        this.subs.push(sub);
    }

    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}

// 全局属性，通过该属性配置 Watcher
Dep.target = null;


function update(value) {
    console.log(value);
}

//
class Watcher {
    constructor(obj, key, cb) {
        // 将 Dep.target 指向自己
        // 然后触发属性的 getter 添加监听
        // 最后将 Dep.target 置空
        Dep.target = this;
        this.cb = cb;
        this.obj = obj;
        this.key = key;
        this.value = obj[key];
        Dep.target = null;
    }

    update() {
        this.value = this.obj[this.key];
        this.cb(this.value);
    }
}

function observe(obj) {
    // 判断类型
    if (!obj || typeof obj !== 'object') {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

function defineReactive(obj, key, val) {
    // 递归子属性
    observe(val)
    let dp = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get value')
            // 将 Watcher 添加到订阅
            if (Dep.target) {
                dp.addSub(Dep.target)
            }
            return val
        },
        set: function reactiveSetter(newVal) {
            console.log('change value')
            val = newVal
            // 执行 watcher 的 update 方法
            dp.notify()
        }
    })
}

// demo
var data = {name: 'yck'}
observe(data)
// 模拟解析到 `{{name}}` 触发的操作
new Watcher(data, 'name', update);
// update Dom innerText
data.name = 'yyy'



