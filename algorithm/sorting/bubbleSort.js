//--> A sorting algorithm where the largest values bubble up to the top!
//--> O(n**2) -- But good for nearly sorted array
//--> Don't use Bubble sort unless you know the array is nearly sorted

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
}

function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

bubbleSort([1, 2, 3, 4, 5, 6]);
