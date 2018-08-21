function mergeSort(arr, start, end) {
    if(start < end) {
        var mid = Math.floor((start + end) / 2);
        
        mergeSort(arr, start, mid); //recursively sort lower half
        mergeSort(arr, mid + 1, end); //recursively sort upper half
        mergeSortHelper(arr, mid, start, end); //merges both halves
    }
    return arr;
}

function mergeSortHelper(arr, mid, start, end) {
    //determines the size for temp arrays
    var leftHalfLength = mid - start + 1;
    var rightHalfLength = end - mid;
    var arr_index;
    
    //initializes temp arrays
    var L = [];
    var R = [];
    
    //copies original array variables into temp arrays
    for(var i  = 0; i < leftHalfLength; i++) {
        L[i] = arr[start + i];
    }
    for(var j = 0; j < rightHalfLength; j++) {
        R[j] = arr[mid + 1 + j];
    }
    
    i = 0;
    j = 0;
    arr_index = start;
    
    //organizes between the two arrays
    while(i < leftHalfLength && j < rightHalfLength) {
        if(L[i] <= R[j]) {
            arr[arr_index] = L[i];
            i++;
        }
        else {
            arr[arr_index] = r[j];
            j++;
        }
        arr_index++;
    }
    
    //writes remaining elements to array
    while(i < leftHalfLength) {
        arr[arr_index] = L[i];
        i++;
        arr_index++;
    }
    while(j < rightHalfLength) {
        arr[arr_index] = R[j];
        j++;
        arr_index++;
}
    }