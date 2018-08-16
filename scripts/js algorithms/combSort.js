function combSort(array) {
    var gap = array.length;
    var shrink = 1.3;
    var sorted;

    while(!sortedCheck(array)) {
        for(var i = 0; i < array.length - 1; i++) {
            //continues as long as rear index is within array
            if(i + gap < array.length) {
                if(array[i] > array[i + gap]) {
                    swap(array, i, i + gap);
                }
            }
        }
        // shrinks the gap after every cycle until gap is equal to 1
        if(gap > 1) {
            gap = Math.floor(gap / shrink);
        }
        else {
            gap = 1;
        }
    }
    return array;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sortedCheck(array) {
    sorted = true;
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i + 1]) {
            sorted = false;
            break;
        }
    }
    return sorted;
}