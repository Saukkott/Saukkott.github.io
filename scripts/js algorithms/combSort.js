function combSort(array) {
    var gap = array.length;
    var shrink = 1.3;
    var sorted = false;

    while(!sorted) {
        for(var i = 0; i < array.length - 1; i++) {
            //continues as long as rear index is within array
            if(i + gap < array.length) {
                if(array[i] > array[i + gap]) {
                    swap(array, i, i + gap);
                }
            }
        }

        //breaks the loop once complete
        if(gap == 1) {
            sorted = true;
        }
        // shrinks the gap after every cycle
        gap = (gap == 1) ? gap : Math.floor(gap / shrink);
    }
    return array;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}