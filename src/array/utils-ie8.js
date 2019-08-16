/*
* author: wancheng
* date:  2019-01-12
* desc:  兼容 ie6-ie8的实现
*/

/**
 * forEach (js v1.6)
 * map (js v1.6)
 * filter (js v1.6)
 * some (js v1.6)
 * every (js v1.6)
 * indexOf (js v1.6)
 * lastIndexOf (js v1.6)
 * reduce (js v1.8)
 * reduceRight (js v1.8)
 */


// foreach
/**
 * foreach
 */
if (typeof Array.prototype.forEach != 'function') {
    /*
    * fn：
    * context: 上下文
    * */
    Array.prototype.forEach = function (fn, context) {
        for (var i = 0, len = this.length; i < len; i++) {
            //
            if (typeof fn == 'function' && Object.prototype.hasOwnProperty.call(this, i)) {
                fn.call(context, this[i], i, this);
            }
        }
    }
}

// map
/**
 *
 */
if (typeof Array.prototype.map != 'function') {
    /*
    * fn:
    * context：上下文
    * */
    Array.prototype.map = function (fn, context) {
        var result = [];
        if (typeof fn === 'function') {
            for (var i = 0, len = this.length; i < len; i++) {
                result.push(fn.call(context, this[i], i, this));
            }
        }
        return result;
    }
}

// filter
/**
 *
 */
if (typeof Array.prototype.filter != 'function') {

    /**
     *
     * @param fn
     * @param context
     * @returns {Array}
     */
    Array.prototype.filter = function (fn, context) {
        var result = [];

        if (typeof fn === 'function') {
            for (var i = 0, len = this.length; i < len; i++) {
                fn.call(context, this[i], i, this) && result.push(this[i]);
            }
        }
        return result;
    }
}


// some
/**
 *
 *
 */
if (typeof Array.prototype.some != 'function') {

    /**
     *
     * @param context
     */
    Array.prototype.some = function (fn, context) {
        var passed = false;

        if (typeof fn === 'function') {
            for (var i = 0, len = this.length; i < len; i++) {
                if (passed === true) break;
                passed = !!fn.call(context, this[i], i, this);
            }
        }
    }
}

// every
/**
 *
 *
 */
if (typeof Array.prototype.every != 'function') {

    /**
     *
     * @param fn
     * @param context
     */
    Array.prototype.every = function (fn, context) {
        var passed = true;

        if (typeof fn === 'function') {
            for (var i = 0, len = this.length; i < len; i++) {
                if (passed === false) break;
                passed = !!fn.call(context, this[i], i, this);
            }
        }
    }
}


// indexOf
/**
 *
 *
 */
if (typeof Array.prototype.indexOf != 'function') {
    /**
     *
     * @param searchElement
     * @param fromIndex
     */
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var index = -1;
        fromIndex = fromIndex * 1 || 0;

        for (var i = 0, len = this.length; i < len; i++) {

            if (i >= fromIndex && this[i] === searchElement) {
                index = i;
                break;
            }
        }
        return index;
    }
}


// lastIndexOf
/**
 *
 *
 */
if (typeof Array.prototype.lastIndexOf != 'function') {

    /**
     *
     * @param searchElement
     * @param fromIndex
     */
    Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
        var index = -1;
        var length = this.length;
        fromIndex = fromIndex * 1 || length - 1;
        for (var i = length - 1; i > -1; i -= 1) {
            if (i <= fromIndex && this[i] === searchElement) {
                index = i;
                break;
            }
        }
        return index;
    }
}


// reduce
/**
 *
 */
if (typeof Array.prototype.reduce != 'function') {

    /**
     *
     * @param callback
     * @param initialValue
     */
    Array.prototype.reduce = function (callback, initialValue) {
        var previous = initialValue;
        var i = 0;
        var length = this.length;
        if (typeof initialValue === 'undefined') {
            previous = this[0];
            i = 1;
        }

        //
        if (typeof callback === 'function') {
            for (i; i < length; i++) {
                this.hasOwnProperty(i) && (previous = callback(previous, this[i], i, this));
            }
        }
        return previous;
    };
}


// reduceRight
/**
 *
 *
 *
 */
if (typeof Array.prototype.reduceRight != 'function') {


    /**
     *
     * @param callback
     * @param initialValue
     */
    Array.prototype.reduceRight = function (callback, initialValue) {
        var length = this.length;
        var i = length - 1;
        var previous = initialValue;

        if (typeof initialValue === 'undefined') {
            previous = this[length - 1];
            i--;
        }

        if (typeof callback === 'function') {
            for (i; i > -1; i -= 1) {
                this.hasOwnProperty(i) && (previous = callback(previous, this[i], i, this));
            }
        }
    }
}






// 警告提示





