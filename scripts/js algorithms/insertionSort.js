function insertionSort(array) {
    var keyValue;
    for(var i = 1; i < array.length; i++) {
        // stores value to be sorted as keyValue
        keyValue = array[i];
        var j = i - 1;
        
        /* moves sorted array section over to the left
         * by 1 until keyValue is placed properly
         */
        while(j >= 0 && array[j] > keyValue) {
            array[j + 1] = array[j];
            j--;
        }
        //place keyValue in correct spot
        array[j + 1] = keyValue;
    }
    return array;
}