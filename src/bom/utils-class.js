/*
* date: 2019-08-21
* desc:
*/
/**
 *
 * @param element DOM 元素。
 * @param classNames String 用字符串分割开来。
 */
var addClass = function (element, classNames) {

    if (!element || !classNames) {
        return;
    }

    var curClassNames = element.className;
    // 用空格分来
    var classes = (classNames || '').split(' ');

    for (var i = 0, len = classes.length; i < len; i++) {
        var classItem = classes[i];
        if (!classItem) {
            continue;
        }

        if (element.classList) {
            element.classList.add(classItem);
        } else if (!hasClass(element, classItem)) {
            curClassNames += ' ' + classItem;
        }
    }

    if (!element.classList) {
        element.className = curClassNames;
    }
};

/**
 * For IE9 compat: when both class and :class are present
 * getAttribute('class') returns wrong value...
 *
 * @param {Element} el
 * @return {String}
 */
var getClass = function (element) {
    let classname = element.className;
    if (typeof classname === 'object') {
        classname = classname.baseVal || '';
    }
    return classname;
};

var setClass = function (element, classNames) {
    const UA = window.navigator.userAgent.toLowerCase();
    const isIE9 = UA && UA.indexOf('msie 9.0') > 0;

    /* istanbul ignore if */
    if (isIE9 && !/svg$/.test(element.namespaceURI)) {
        element.className = classNames;
    } else {
        element.setAttribute('class', classNames);
    }
};

/**
 *
 * @param element
 * @param classNames
 */
var removeClass = function (element, classNames) {
    if (!element || !classNames) {
        return;
    }

    var curClassNames = ' ' + element.className + ' ';
    // 用空格分来
    var classes = (classNames || '').split(' ');

    for (var i = 0, len = classes.length; i < len; i++) {
        var classItem = classes[i];
        if (!classItem) {
            continue;
        }

        if (element.classList) {
            element.classList.remove(classItem);
        } else if (!hasClass(element, classItem)) {
            curClassNames = curClassNames.replace(' ' + classItem + ' ', ' ');
        }
    }

    if (!element.classList) {
        element.className = trim(curClassNames);
    }
};


/**
 *
 * @param element Element 元素
 * @param className
 * @returns {boolean}
 */
var hasClass = function (element, className) {
    if (!element || !className) {
        return false;
    }

    //
    if (className.indexOf(' ') !== -1) {
        throw new Error('classNames should not contain space');
    }


    if (element.classList) {
        return element.classList.contains(className);
    } else {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }
};
