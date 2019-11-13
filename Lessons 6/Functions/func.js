// isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
      break;
    }
  }
  return true;
}
console.log("1. isPrime: false, false, true, false");
console.log(isPrime(0));                          // false
console.log(isPrime(1));                         // false
console.log(isPrime(17));                         // true
console.log(isPrime(10000000000000));             // false


// factorial - Returns a number that is the factorial of the given number.
function factorial(num) {
  let numFactorial = 1;
  if (num === 0 || num === 1) return numFactorial;
  for (let i = 1; i <= num; i++) {
    numFactorial *= i;
  }
  return numFactorial;

}
console.log("2. factorial: 1, 1, 720");
console.log(factorial(0));                        // 1
console.log(factorial(1));                      // 1
console.log(factorial(6));                      // 720

// fib - Returns the nth Fibonacci number.
function fib(num) {
  if (num === 0) return 0;
  if (num === 1 || num === 2)
    return 1;
  else
    return fib(num - 1) + fib(num - 2);
}
console.log("3. fib: 0, 1, 55, 6765");
console.log(fib(0));                              // 0
console.log(fib(1));                              // 1
console.log(fib(10));                             // 55
console.log(fib(20));                             // 6765

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr) {
  if (arr.length === 0) return true;
  let sortedArr = arr.slice().sort((a,b) => a-b),
      isSorted = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
}
console.log("4. isSorted: true, true, false");
console.log(isSorted([]));                     // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]));  // true
console.log(isSorted([3, 9, -3, 10]));            // false

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(str) {
  let arrFromStr = str.split(''),
      arrLen = arrFromStr.length,
      reverseStr = '';
  if (arrLen === 0) return reverseStr;
  for (let i = 0; i < Math.floor(arrLen / 2); i++) {
    let oldVal = arrFromStr[i];
    arrFromStr[i] = arrFromStr[arrLen - 1 - i];
    arrFromStr[arrLen - 1 - i] = oldVal;
  }
  reverseStr = arrFromStr.join('');
  return reverseStr;
}
console.log("5. reverse: '', 'fedcba'");
console.log(reverse(''));                        // ''
console.log(reverse('abcdef'));                // 'fedcba'

//indexOf - Implement the indexOf function for arrays.
function indexOf(arr, num) {
  let index = -1;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      index = i;
      break;
    }
  }
  return index;
}
console.log("6. indexOf: 0, -1");
console.log(indexOf([1, 2, 3], 1));              // 0
console.log(indexOf([1, 2, 3], 4));               // -1

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(str) {
  if (str.length === 0) return true;
  str = str.replace(/\s+/g, '').toLowerCase();
  let arrFromStr = str.split(''),
      isPalindrome = true;
  arrLen = arrFromStr.length;
  for (let i = 0; i < Math.floor(arrLen / 2); i++) {
    if(arrFromStr[i] !== arrFromStr[arrLen - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;

}
console.log("7. isPalindrome: true, true, false, true");
console.log(isPalindrome(''));                                // true
console.log(isPalindrome('abcdcba'));                         // true
console.log(isPalindrome('abcd'));                            // false
console.log(isPalindrome('A man a plan a canal Panama'));     // true

// missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in O(N) time? Hint: There’s a clever formula you can use.
function missing(arr) {
  if (arr.length === 0 || arr.length === arr.reduce((max, current) => {if (current > max) max = current; return max;})) return undefined;
  let missingNum;
  arr.sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      missingNum = i + 1;
      break;
    }
  }
  return missingNum;
}
console.log("8. missing: undefined, 2, 1, 3, undefined");
console.log(missing([]));                        // undefined
console.log(missing([1, 4, 3]));                // 2
console.log(missing([2, 3, 4]));                  // 1
console.log(missing([5, 1, 4, 2]));               // 3
console.log(missing([1, 2, 3, 4]));               // undefined

// isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.
function isBalanced(str) {
  let bracesArr = [],
      isPoped = false,
      poped = "";
  for (let braces of str) {
    if (isPoped && bracesArr.length === 0) return false;
    if (braces === "{")
      bracesArr.push(braces)
    else if (braces === "}") {
      if (bracesArr.length === 0) return false;
      isPoped = true;
      poped = bracesArr.pop();
    }
  }
  if (bracesArr.length !== 0) return false;
  return true;
}
console.log("9. isBalanced: false, false, false, true, false, false");
console.log(isBalanced('}{'));                      // false
console.log(isBalanced('{{}'));                     // false
console.log(isBalanced('{}{}'));                    // false
console.log(isBalanced('foo { bar { baz } boo }')); // true
console.log(isBalanced('foo { bar { baz }'));       // false
console.log(isBalanced('foo { bar } }'));           // false
