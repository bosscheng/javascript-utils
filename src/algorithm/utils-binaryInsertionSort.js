/**
 * #desc
 *      二分法插入算法
 *
 * 对于二分插入算法，区别于插入算法：查找插入位置的时候，使用的是二分查找的
 * 方式，在速度上有一定的提升。
 *
 * 1.从第一个元素开始，该元素认为已经被排好序了
 * 2.取出下一个元素，在已经排序的元素序列中二分查找第一个比它大的数的位置。
 * 3.将新的元素插入到该位置后面
 * 4.重复2-3动作。
 *
 * 最佳情况：T(n) = O(nlogn)
 * 最差情况：T(n) = O(n2)
 * 平均情况：T(n) = O(n2)
 *
 *
 * */
var binaryInsertionSort = function (array) {
    if (!util.isArray(array)) {
        throw "array is not an Array";
    }

    var length = array.length;
    var i, key, left, right, middle;

    for (i = 1; i < length; i++) {
        key = array[i], left = 0, right = i - 1;

        while (left <= right) {
            middle = parseInt((left + right) / 2);
            if (key < array[middle]) {
                right = middle - 1;
            }
            else {
                left = middle + 1;
            }
        }

        var j;

        for (j = i - 1; j >= left; j--) {
            array[j + 1] = array[j];
        }
        array[left] = key;
    }
    return array;
}
