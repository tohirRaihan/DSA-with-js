//--> Builds up the sort by gradually creating a larger left half which is always sorted
//--> O(n**2) -- it is good for nearly sorted array
//--> It is also good if you get one data at a time and place that data in the array with sorted position (it is called online algorithm)

function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);

/** PSEUDOCODE **
 --Start by picking the second element in the array
 --Now compare the second element with the one before it and swap if necessary.
 --Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
**/
