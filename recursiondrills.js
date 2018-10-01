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
