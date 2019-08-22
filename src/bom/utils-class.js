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
}
