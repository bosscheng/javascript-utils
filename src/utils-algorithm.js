/**
 * javascript algorithm 算法
 * Author: bosscheng
 * Data: 14-11-27
 */



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
var insertionSort = function (array) {
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

/**
 * @desc
 *      选择排序
 * 工作原理：
 *  首先在未排序的序列中找到最小的元素，存放到排序序列的起始位置
 *  然后，再从剩余的元素中找到最小的元素，然后放置在已经排序的序列的末尾。
 *  直到所有的都排序完毕。
 *
 *   初始状态：无序区为R[1..n]，有序区为空；
 *  第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和
 *  R(i..n）。该趟排序从当前无序区中选出关键字最小的记录 R[k]，将它与无序区
 *  的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序
 *  区和记录个数减少1个的新无序区；n-1趟结束，数组有序化了
 *
 * */
var selectionSort = function(array){
    if (!util.isArray(array)) {
        throw "array is not an Array";
    }

    var length = array.length, temp;

    for (var i = 0; i < length; i++) {
        // 从第零个开始
        var min = array[i];
        for (var j = i + 1; j < length; j++) {
            if(array[j] < min){
                temp = min;
                min = array[j];
                array[j] = temp;
            }
        }

        // 将最小的放置到对应的位置。
        array[i] = min;
    }

    return array;
}


/**
 * @desc
 *      冒泡排序
 *
 *  冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比
 *  较两个元素，如果它们的顺序错误就把它们交换过来。走访数列的工作是
 *  重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算
 *  法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
 *
 *
 *  比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 *  对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 *  针对所有的元素重复以上的步骤，除了最后一个；
 *  重复步骤1~3，直到排序完成。
 *
 * */
var bubbleSort = function(array){
    if (!util.isArray(array)) {
        throw "array is not an Array";
    }
    var length = array.length, temp;

    for (var i = 0; i < length; i++) {
        for (var j = length - 1; j >= i; j--) {
            if (array[j] < array[j - 1]) {
                temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}


/**
 * @desc
 *      计数排序
 *  计数排序（counting sort）是一种稳定的排序方法，计数排序使用一个额外的数组C，
 *  其中第i个元素是待排序数组A中值等于i的元素的个数，
 *  然后根据数组C来将A中的元素排到正确的位置，只能对整数进行排序。
 *
 *
 *  算法描述和具体实现：
 *  1.找出待排序算法中的最大值和最小。
 *  2.统计数组中每个值为i的元素出现的次数，存入数组C的第i项。
 *  3.对所有的计数累加，从C中的第一个元素开始，每一项的前一项相加。
 *  4.反向填充目标数值；将每个元素i放置在新的数组C(i)项，每放一个元素就将C(i)减去1。
 *
 *
 *
 *  算法分析：
 *  当输入的元素是n 个0到k之间的整数时，它的运行时间是 O(n + k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。
 *  由于用来计数的数组C的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上1），
 *  这使得计数排序对于数据范围很大的数组，需要大量时间和内存。
 * */
var countingSort = function(array){
    if (!util.isArray(array)) {
        throw "array is not an Array";
    }
    var len = array.length, B = [], C = [], min = array[0], max = array[0];
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (var k = len - 1; k >= 0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    return B;
}

/*
    * @desc
    *       快速排序
    *
    *
    * */
var quickSort = function(){

};


