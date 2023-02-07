//--> Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
//--> Very efficient for solving problems with minimal time & space complexity

/**
 * PROBLEM #1:
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined
 * if a pair does not exist
 *
 * EXAMPLES:
 * sumZero([-3,-2,-1,0,1,2,3]) --> [-3,3]
 * sumZero([-2,0,1,3]) --> undefined
 * sumZero([1,2,3]) --> undefined
 */
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum == 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
  return undefined;
}

/**
 * PROBLEM #2:
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 *
 * EXAMPLES:
 * countUniqueValues([1,1,1,1,1,2]) --> 2
 * countUniqueValues([]) --> 0
 * countUniqueValues([-2,-1,-1,0,1]) --> 4
 */
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
