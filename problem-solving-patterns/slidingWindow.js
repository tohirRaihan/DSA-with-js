//--> This pattern involves creating a window which can either be an array or number from one position to another.
//--> Very useful for keeping track of a subset of data in an array/string etc.

/**
 * PROBLEM #1:
 * Write a function called maxSubarraySum which accepts an array of integers
 * and a number called n. The function should calculate the maximum sum of n
 * consecutive elements in the array.
 *
 * EXAMPLES:
 * maxSubarraySum([1,2,5,2,8,1,5],2) --> 10
 * maxSubarraySum([1,2,5,2,8,1,5],4) --> 17
 * maxSubarraySum([4,2,1,6],1) --> 6
 * maxSubarraySum([4,2,1,6,2],4) --> 13
 * maxSubarraySum([],4) --> null
 */
function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}
