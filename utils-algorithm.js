/**
 * javascript algorithm
 * Author: bosscheng
 * Data: 14-11-27
 */


var org = org || {};

org.util = org.util || {};

;
(function (util) {

    /**
     * @desc
     *      插入算法
     *
     * 构建原理:
     * 通过构建有序序列，对未排序的数据，在已经排序序列中从后向前扫描，找到相对应位置
     * 并插入，插入排序在实现上，采用的是in-place排序（O(1)）
     *
     * 所以在从后向前扫描的时候，需要反复把已经排序元素逐步向后挪动，为最新元素提供插入空间
     *
     * @param Array  array
     *
     * 1.从第一个元素开始，该元素被认为已经排序了；
     * 2.取出下一个元素，在已经排序的元素序列中从后向前扫描；
     * 3.如果该元素（已经排序了）大于新元素，将该元素移动到下一位置；
     * 4.重复步骤3，直到找到已经排序的原书小于或者等于新元素的位置；
     * 5.将新元素插入到该位置后
     * 6.重复步骤2-5
     *
     *
     * @ 算法分析
     *
     * 最佳情况：输入的数组按照升序排序 T(n) = O(n)
     * 最坏情况：输入的数组按照降序排序 T(n) = O(n*n)
     * 平均情况：T(n) = O(n*n)
     *
     * return Array
     * */
    util.insertionSort = function (array) {
        if (!util.isArray(array)) {
            throw "array is not an Array";
        }

        var key, j;
        //
        for (var i = 1; i < array.length; i++) {
            // 默认最大值：初始化的时候为第二个数字
            key = array[i];
            j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        return array;
    }


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
    util.binaryInsertionSort = function (array) {
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


})(org.util);

