/*
* date: 2019-07-28
* desc:
*/
class Route {
    constructor() {
        this.routes = {};
        this.currentHash = '';
        // 绑定this，避免监听时this指向改变
        this.freshRoute = this.freshRoute.bind(this)

        window.addEventListener('load', this.freshRoute, false)
        window.addEventListener('hashchange', this.freshRoute, false)
    }

    // 存储
    storeRoute(path, cb) {
        this.routes[path] = cb || function () {
        }
    }

    freshRoute() {
        this.currentHash = location.hash.slice(1) || '/'
        this.routes[this.currentHash]()
    }
}
