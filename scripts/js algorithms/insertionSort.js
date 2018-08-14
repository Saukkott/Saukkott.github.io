function insertionSort(array) {
    var i,
        keyValue,
        j;
    for(i = 1; i < array.length - 1; i++) {
        // stores value to be sorted as keyValue
        keyValue = arr[i];
        j = i - 1;
        
        /* moves sorted array section over to the left
         * by 1 until keyValue is placed properly
         */
        while(j >= 0 && arr[j] > keyValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        //place keyValue in correct spot
        arr[j + 1] = keyValue;
    }
    return array;
}