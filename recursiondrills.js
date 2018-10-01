// Counting Sheep
// Write a recursive function that counts how many sheep jumps over the fence. Your program should take a number as an input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

//recursive
function countSheep(num) {
  if (num === 0) {
    return;
  }
  console.log(num + ' - Another sheep jump over the fence');
  return countSheep(num - 1);
}
countSheep(3);

//Array Double

// Write a function that takes an array as input which
// contains an unknown set of numbers, and outputs an array with
// each input value doubled. Test your solution by trying a handful of different arrays.
// For example:
//  Input: [1, 2, 3]
//  Output: [2, 4, 6]
function arrayDouble(arr) {
  if (arr.length === 0) {
    return [];
  }

  let num = arr[0] * 2;
  return [num, ...arrayDouble(arr.slice(1))];
}

console.log(arrayDouble([1, 2, 3]));



// Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.
//recursive

// function reverseString(str, rev = '') {
//   if (str.length === 0) {
//     return rev;
//   }
//   rev += str[str.length - 1];
//   console.log(rev);
//   return reverseString(str.slice(0, str.length - 1), rev);
// }
// console.log(reverseString('two'));
function reverseString(string) {
  if (string.length <= 0) {
    return '';
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));
}
console.log(reverseString('two'));



// nth Triangular Number

// Calculates the nth triangular number. A triangular number counts the objects that 
// can form an equilateral triangle. The nth triangular number is the number of dots 
// composing a triangle with n dots on a side, and is equal to the sum of the n natural 
// numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45

// n = 1  seq = 1;
// n = 2 seq = 2 + 1
// n = 3 seq =  3 + 2 + 1
// n = 4 num = 4 + 3 + 2 + 1
function nth(n) {
  if (n === 0) {
    return 0;
  }
  return n + nth(n - 1);
}

console.log(nth(4));