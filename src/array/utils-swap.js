/**
 *
 * @param array
 * @param i
 * @param j
 */
function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}