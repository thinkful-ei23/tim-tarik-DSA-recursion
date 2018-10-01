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

  let num = arr[0]*2;
  return [ num, ...arrayDouble(arr.slice(1))];
}

console.log(arrayDouble([1, 2, 3]));

