function selectionSort(array) {
    var nextIndex;
    for(var i = 0; i < array.length - 1; i++) {
        //iterate through array and swap lowest value with array
        nextIndex = i;
        for(var j = i + 1; j < array.length; j++) {
            if(array[nextIndex] > array[j]) {
                nextIndex = j;
            }
        }
        swap(array, nextIndex, i);
    }
    return array;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}