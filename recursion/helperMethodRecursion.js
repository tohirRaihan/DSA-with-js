//--> It is a design pattern taht is commonly used with recursion
//--> This is commonly done when we need to compile something like an array or a list of data

function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}
