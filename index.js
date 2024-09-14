// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

const calculateDifference = (a, b) => {
  return Math.abs(a - b);
};
console.log(calculateDifference(-2, 1));

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.
const isOdd = (num) => {
  return num % 2 === 0 ? false : true;
};

console.log(isOdd(5));
console.log(isOdd(6));

// 3. Write a function named find Min that takes an array of numbers and returns the smallest number in the array.

const findMin = (arr) => {
  const min = Math.min(...arr);
  return min;
};
console.log(findMin([15, 5, 5, 4, 1]));

// 4. Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
const filterEvenNumbers = (arr) => {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  return evenNumbers;
};

console.log(filterEvenNumbers([1, 2, 10, 8, 9, 12]));

// 6. Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

const lowercaseFirstLetter = (str) => {
  const strArr = str.slice(0);
  return strArr[0].toLowerCase() + str.slice(1);
};
console.log(lowercaseFirstLetter("Bangladesh "));

// 7. Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string.It should filter vowels from the string.

const countVowels = (str) => {
  let count = 0;
  const VOWELS = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const strArr = str.split("");
  let i = 0;
  while (i <= strArr.length) {
    if (VOWELS.includes(strArr[i])) count = count + 1;
    i++;
  }
  return count;
};

console.log(countVowels("BANGLAdeshi"));

// 8. Write a function named findAverage that takes an array of numbers and returns the average of all elements.
const findAverage = (arr) => {
  const average = arr.reduce((acc, el) => acc + el) / arr.length;
  return average;
};
console.log(findAverage([15, 15, 15]));
