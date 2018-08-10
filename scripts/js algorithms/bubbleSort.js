function bubbleSort(arr){
    var swapped;
    do {
        swapped = false;
        for(var i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
    } while(swapped);
    return arr;
    console.log("bubbleSort");
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}