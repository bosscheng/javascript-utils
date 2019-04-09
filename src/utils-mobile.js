/**
 * utils 移动端的方法
 * Author: bosscheng
 * Data: 14-11-27
 */

/*
     * 获取移动设备屏幕宽度
     * */
var getScreenWidth = function () {
    var smallerSide = Math.min(screen.width, screen.height);
    var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
    var fixViewPortsExperimentRunning = fixViewPortsExperiment && (fixViewPortsExperiment.toLowerCase() === "new");
    if (fixViewPortsExperiment) {
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            smallerSide = smallerSide / window.devicePixelRatio;
        }
    }
    return smallerSide;
}

/*
 * 获取到移动设备最大化大小
 * */
var getZoom = function () {
    var screenWidth = (Math.abs(window.orientation) === 90) ? Math.max(screen.height, screen.width) : Math.min(screen.height, screen.width);
    if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
        screenWidth = screenWidth / window.devicePixelRatio;
    }
    var FixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
    var FixViewPortsExperimentRunning = FixViewPortsExperiment && (FixViewPortsExperiment === "New" || FixViewPortsExperiment === "new");
    if (FixViewPortsExperimentRunning) {
        return screenWidth / window.innerWidth;
    } else {
        return screenWidth / document.body.offsetWidth;
    }
}

/*
 * 获取到移动设备初始化大小
 * */
var getIniZoom = function () {
    if (!this._initZoom) {
        var screenWidth = Math.min(screen.height, screen.width);
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            screenWidth = screenWidth / window.devicePixelRatio;
        }
        this._initZoom = screenWidth / document.body.offsetWidth;
    }
    return this._initZoom;
}

/*
 * 判断是否打开视窗
 * */
var isViewPortOpen = function () {
    return !!document.getElementById('wixMobileViewport');
}

/*
 * 判断是否 touch 屏幕
 * */
var isTouchScreen = function () {
    return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
}

/*
 * 判断是否安卓移动设备
 * */
var isAndroidMobileDevice = function () {
    return (/android/i.test(navigator.userAgent.toLowerCase()));
}

/*
 * 是否是苹果移动设备访问的
 * */
var isAppleMobileDevice = function () {
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}

/*
 * 判断是否移动设备访问
 * */
var isMobileUserAgent = function () {
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}
/*
 * 是否移动设备
 * */
var isMobile = function () {
    if (typeof this._isMobile === 'boolean') {
        return this._isMobile;
    }
    var screenWidth = this.getScreenWidth();
    var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
    var fixViewPortsExperimentRunning = fixViewPortsExperiment && (fixViewPortsExperiment.toLowerCase() === "new");
    if (!fixViewPortsExperiment) {
        if (!this.isAppleMobileDevice()) {
            screenWidth = screenWidth / window.devicePixelRatio;
        }
    }
    var isMobileScreenSize = screenWidth < 600;
    var isMobileUserAgent = false;
    this._isMobile = isMobileScreenSize && this.isTouchScreen();
    return this._isMobile;
}
