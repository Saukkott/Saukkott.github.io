/* holds logic for buttons as well as the if statement
 * that implements the selected sort method
 */

var numArray = [];

//pushes entered numbers into an array 
//and prints them in the numField1Output <p>
function printNumField(numField) {

    /* prevents an empty entry
     * and numbers smaller or larger than the MIN_SAFE_INTEGER
     * and MAX_SAFE_INTEGER respectively, both ~9 quadrillion
     * TO-DO: stop input of "e"
     */
    if(numField.length != 0
    && numField >= Number.MIN_SAFE_INTEGER
    && numField <= Number.MAX_SAFE_INTEGER) {
        numArray.push(numField);
        document.getElementById("numField1Output")
        .innerHTML +=numArray[numArray.length - 1] + " ";
        document.forms["numFieldForm"].reset();
        document.getElementById("numField1").focus();
    }
    else {
        alert("Please enter a number before pressing add");
    }
}

function printSortedNumField() {
    
    //clears sorted area output
    document.getElementById("numField1Sorted")
    .innerHTML = "Sorted: ";
    
    //holds the value or sortTypeSelect
    var element = document.getElementById("sortTypeSelect");
    var selectedSortType = element.options[element.selectedIndex].value;
    console.log(selectedSortType);

    //checks to make sure the array isn't empty
    //then sorts and prints
    if(numArray.length == 0) {
        alert("Array is empty, please enter at " +
         "least 1 integer to be sorted");
    }
    else {
        selectedSort(selectedSortType, numArray);
        for(var i = 0; i < numArray.length; i++) {
            document.getElementById("numField1Sorted")
            .innerHTML += numArray[i] + " ";
        }
    }
}

function clearNumArray() {
    numArray = [];
    document.getElementById("numField1Output")
    .innerHTML = "Input: ";
    document.getElementById("numField1Sorted")
    .innerHTML = "Sorted: ";
}

//allows use of different sortTypes in one HTML page
function selectedSort(sortType, array) {
    //copies array before sending it to be sorted
    //to conserve original array
    if(sortType == "quickSort") {
        quickSort(array, 0, array.length - 1);
    }
    if(sortType == "bubbleSort") {
        bubbleSort(array);
    }
}