//--> Invoke the same function with a different input until you reach your base case!

function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function reverseStr(str) {
  if (str.length <= 1) return str;
  return reverseStr(str.slice(1)) + str[0];
}

// palindrome means same if we read the string backword
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  if (str[0] === str.at(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}

function flatten(oldArr) {
  let newArr = [];
  for (const element of oldArr) {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

function nestedEvenSum(obj, sum = 0) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

function stringifyNumbers(obj) {
  const newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

function collectStrings(obj) {
  let stringsArr = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    }
    else if (typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
