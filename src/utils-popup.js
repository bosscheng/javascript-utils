/**
 * 多谈出层管理，主要还是控制，zindex 和事件的统一响应。
 * @type {boolean}
 */


var hasModal = false;
var hasInitZIndex = false;
var zIndex = 2000;


// 实例化对象
var instances = {};

// popup 管理对象。
var PopupManager = {

    modalFade: true,
    modalStack: [],  // modal stack 堆栈信息。

    // 获取实例对象
    getInstance: function (id) {

    },

    register: function (id, instance) {

    },

    deregister: function (id) {

    },

    nextZIndex: function () {

    },

    doOnModalClick: function () {

    },

    openModal: function () {

    },

    closeModal: function () {

    }

};


Object.defineProperty(PopupManager, 'zIndex', {
    configurable: true,
    get() {
        if (!hasInitZIndex) {
            //zIndex =
            // 初始化的时候设置的zIndex 大小。
            hasInitZIndex = true;
        }
        return zIndex;
    },
    set(value) {
        zIndex = value;
    }
});

// 获取到最顶层的 popup
var getTopPopup = function () {

};

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {

        //    获取到顶层的 popup，然后关闭掉。
    }
});


