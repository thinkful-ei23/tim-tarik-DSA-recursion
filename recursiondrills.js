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
//iterative
function countSheepIt(num) {
  for (let i = num; i > 0; i--) {
    console.log(`${i} - Another sheep jump over the fence`);
  }
}
countSheepIt(3);
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

function arrayDoubleIt(arr) {
  if (arr.length === 0) {
    return [];
  }

  return arr.map(num => num*2);
}

console.log(arrayDoubleIt([1, 2, 3]));


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

// String Splitter
// Split a string based upon a separator (similar to String.prototype.split).

function stringSplit(str, separator) {
  if (str.length === 0) {
    return [];
  }
  if (str.indexOf(separator) === -1) {
    return [str];
  }
  if (separator === '') {
    return [str[0], ...stringSplit(str.slice(1), separator)];
  }

  return [
    str.slice(0, str.indexOf(separator)),
    ...stringSplit(str.slice(str.indexOf(separator) + 1), separator)
  ];
}
console.log(stringSplit('A sheep jumped over the fence', ''));
console.log(stringSplit('', ''));

function binaryRep(num) {
  if (num === 0) {
    return '';
  }

  const binary = Math.floor(num % 2);
  return binaryRep(Math.floor(num / 2)) + binary;
}

console.log(25);

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(4));

// Write a recursive function that prints the fibonacci sequence of a given number.

function fibb(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibb(num - 1) + fibb(num - 2);
}
console.log(fibb(7));

function anagram(str) {
  if (str.length === 0) {
    return [];
  } else if (str.length === 1) {
    return [str];
  }
}

const facebookEmployees = [
  { id: 'Zuckerberg', boss: null },
  { id: 'Schrepher', boss: 'Zuckerberg' },
  { id: 'Schrage', boss: 'Zuckerberg' },
  { id: 'Sandberg', boss: 'Zuckerberg' },
  { id: 'Bosworth', boss: 'Schrepher' },
  { id: 'Zhao', boss: 'Schrepher' },
  { id: 'VanDyck', boss: 'Schrage' },
  { id: 'Swain', boss: 'Schrage' },
  { id: 'Goler', boss: 'Sandberg' },
  { id: 'Hernandez', boss: 'Sandberg' },
  { id: 'Moissinac', boss: 'Sandberg' },
  { id: 'Kelley', boss: 'Sandberg' },
  { id: 'Steve', boss: 'Bosworth' },
  { id: 'Kyle', boss: 'Bosworth' },
  { id: 'Andra', boss: 'Bosworth' },
  { id: 'Richie', boss: 'Zhao' },
  { id: 'Sofia', boss: 'Zhao' },
  { id: 'Jen', boss: 'Zhao' },
  { id: 'Sabrina', boss: 'VanDyck' },
  { id: 'Michelle', boss: 'VanDyck' },
  { id: 'Josh', boss: 'VanDyck' },
  { id: 'Blanch', boss: 'Swain' },
  { id: 'Tom', boss: 'Swain' },
  { id: 'Joe', boss: 'Swain' },
  { id: 'Eddie', boss: 'Goler' },
  { id: 'Julie', boss: 'Goler' },
  { id: 'Annie', boss: 'Goler' },
  { id: 'Rowi', boss: 'Hernandez' },
  { id: 'Inga', boss: 'Hernandez' },
  { id: 'Morgan', boss: 'Hernandez' },
  { id: 'Amy', boss: 'Moissinac' },
  { id: 'Chuck', boss: 'Moissinac' },
  { id: 'Vinni', boss: 'Moissinac' },
  { id: 'Eric', boss: 'Kelley' },
  { id: 'Ana', boss: 'Kelley' },
  { id: 'Wes', boss: 'Kelley' }
];

function employeeTree(facebookEmployees, boss) {
  let node = {};
  facebookEmployees
    .filter(employee => employee.boss === boss)
    .forEach(
      employee =>
        (node[employee.id] = employeeTree(facebookEmployees, employee.id))
    );

  return node;
}

console.log(JSON.stringify(employeeTree(facebookEmployees, null), null, 2));
