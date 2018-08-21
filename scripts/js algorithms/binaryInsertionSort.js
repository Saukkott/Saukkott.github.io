function binaryInsertionSort(array) {
    for(var i = 1; i < array.length; i++) {
        var keyValue = array[i];
        var j = i - 1;
        
        //uses binary search to find where keyValue should be stored
        loc = binarySearch(array, keyValue, 0, j);
        
        /* moves sorted array section over to the right
         * by 1 until loc is reached, then places keyValue at loc
         */
        while(j >= loc) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = keyValue;
    }
    return array;
}

function binarySearch(array, num, start, end) {
    //catches start > end and uses start as highest index
    if(start >= end) {
        return (num > array[start]) ? start + 1 : start;
    }
    
    mid = Math.floor((start + end) / 2);
    
    if(num == array[mid]) {
        return mid + 1;
    }
    if(num < array[mid]) {
        return binarySearch(array, num, start, mid - 1);
    }
    return binarySearch(array, num, mid + 1, end);
}