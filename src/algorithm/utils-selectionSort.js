
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
