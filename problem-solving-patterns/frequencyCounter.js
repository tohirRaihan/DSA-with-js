//-> When multiple inputs needs to compare between them to see if they consists of similar values.

/**
 * PROBLEM #1:
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's
 * corresponding value squared in the second array.
 * The frequency of values must be same.
 *
 * EXAMPLES:
 * same([1,2,3], [4,1,9]) --> true
 * same([1,2,3], [1,9]) --> false
 * same([1,2,1], [4,4,1]) --> false (must be same frequency)
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  arr1.forEach((val) => {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  });
  arr2.forEach((val) => {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  });
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }
  return true;
}
