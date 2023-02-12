//--> Builds up the sort by gradually creating a larger left half which is always sorted

function insertionSort(arr) {
  // loop from the index 1 of the array to the end
  for(let i =1; i<arr.length; i++) {
    let currentValue = arr[i];
    let currPos = null;

    for(j=i; j>=0; j--) {
      if(arr[j-1] > arr[j]) {
        arr[j] =arr[j-1];
        currPos = j-1;
      } else break;
    }
    if(currPos !== null) arr[currPos] = currentValue;
  }
  console.log(arr)
  // check if the value is smaller than the previous value
    // if true than copy the previous value to the current
    // else current position has current value

  return arr;
}

insertionSort([2,1,5,3,8,4,9])
/*
2 1 5 3 8 4 9
2 2 5 3 8 4 9
 */
