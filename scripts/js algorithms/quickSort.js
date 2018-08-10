function partition(arr, start, end) {
    var pivot = arr[end];
    var p_index = start;
    
     //swap Arr[i] with p_index when Arr[i] <= pivot, increment p_index
    for(i = start; i < end; i++) {
        if(arr[i] < pivot) {
            swap(arr, i, p_index);
            p_index++;
        }
    }
    //moves pivot into correct spot in array
    swap(arr, end, p_index);
    return p_index;
}

function quickSort(arr, start, end) {

    if(start < end) {
        /* finds where the last element to be sorted belongs
         * and moves it after sorting all smaller numbers
         */
        var p_index = partition(arr, start, end);
        
        /*recursively calls both sides from p_index until
         *above if condition is met
         */
        quickSort(arr, start, p_index - 1);
        quickSort(arr, p_index + 1, end);      
    }
    return arr;
    console.log("quickSort");
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}