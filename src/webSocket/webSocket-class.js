/**
 * Date:2021/2/1
 * Desc:
 */


/**
 * 验证参数是否合法
 * @private
 * @param {object} options
 * @returns {boolean}
 */
function validateParam(options = {}) {
    if (!window.WebSocket) {
        throw new Error('浏览器不支持 WebSocket')
    }
    if (!options.server) {
        throw new Error('缺少 server 参数')
    }
    return true
}

class WebSocketClass {
    constructor(options = {}) {
        this.options = {
            server: '',
            reconnect: true,
            reconnectDelay: 3000,
            ...options
        };
        this.isConnected = false;
        this.ws = null;
        this.reconnectTimer = null;
        this.connect();
    }

    /**
     * 建立连接
     */
    connect() {
        const o = this.options
        this.ws = new WebSocket(o.server)
        this.ws.onmessage = this.handleMessage.bind(this)
        this.ws.onopen = this.handleOpen.bind(this)
        this.ws.onclose = this.handleClose.bind(this)
        this.ws.onerror = this.handleConnect.bind(this)
    }

    /**
     * 延迟 连接
     */
    delayReconnect() {
        this.isConnected = false
        this.reconnectTimer = setTimeout(() => {
            this.reconnect()
        }, this.options.reconnectDelay)
    }

    /**
     *
     */
    handleOpen() {
        this.isConnected = true
        /**
         * 连接建立成功触发
         * @event open
         */
        // event('open');
    }

    handleClose() {
        /**
         * 连接关闭触发
         * @event close
         */
        // event('close');
        this.options.reconnect && this.delayReconnect()
    }

    handleError() {
        /**
         * 连接错误触发
         * @event error
         */
        // event('error');
        this.delayReconnect()
    }

    handleConnect() {
        this.isConnected = false
        this.reconnectTimer = setTimeout(() => {
            this.reconnect()
        }, this.options.reconnectDelay)
    }

    handleMessage(evt) {
        let info = evt.data
        if (info) {
            const regex = /^\{[\W\w]*\}$/
            info = regex.test(info) ? JSON.parse(info) : info;
        }
        /**
         * 收到消息触发
         * @event message
         * @param {String|Object} info 消息
         */
        // event('message',info);
    }

    /**
     * 重新连接
     */
    reconnect() {
        clearTimeout(this.reconnectTimer)
        if (this.isConnected) return
        this.connect()
    }

    /**
     * 发送信息
     * @param {Object|String} message 消息内容
     */
    send(message) {
        const str = typeof message === 'object' ? JSON.stringify(message) : message
        this.ws.send(str)
    }

    /**
     * 获取WebSocket状态
     * @returns {*}
     */
    getState() {
        // 0: 未连接，1：已连接，2：正在关闭，3：已关闭或连接打不开
        return this.ws.readyState
    }

    /**
     * 关闭连接
     */
    close() {
        this.ws.close()
    }

    /**
     * 销毁
     */
    destroy() {
        this.close()
        this.ws.onmessage = null
        this.ws.onopen = null
        this.ws.onclose = null
        this.ws.onerror = null
        this.ws = null
    }
}
