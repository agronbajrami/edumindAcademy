// const array = [1, 2, 3, 4, 5, 6];

// array.forEach((element) => console.log(element));

// Exercise: Given an array of colors, use .forEach to log each color in uppercase.
// const colors = ["red", "green", "blue", "yellow", "purple"];

// colors.forEach((element) => console.log(element.toUpperCase()));

// Exercise: Given an array of numbers,
//  use .filter to create a new array that only includes numbers greater than 5.

// const numbers = [3, 4, 5, 6, 7, 8];

// const result = numbers.filter((element) => element > 5);

// console.log(result);

// Exercise: Given an array of words,
//  create a new array where each word has an exclamation mark added at the end.

// const words = ["edumind", "academy", "java", "javascript", "teaching"];

// const result = words.map((element) => element + "!");

// console.log(result);

//rezultati duhet tdel kshut ["edumind!", "academy!", "java!", "javascript!", "teaching!"]

// Exercise: Given an array of names, create a new array where each name is in lowercase.

// const lowerCaseWords = ["EDU", "ACADE", "JAVA", "TEST"];

// Exercise: Given an array of prices, return a new array where each price is increased by 20%.

// const prices = [100, 200, 300];

// const result = prices.map((element) => (element * 20) / 100 + element);

// console.log(result);

//rezultati => [120, 240, 360]

// Exercise: Given an array of strings, create a new array that only includes strings with exactly 5 characters.

// const strings = ["cherry", "banana", "apple", "pineapple", "grape"];

// const result = strings.filter((element) => element.length === 5);

// console.log(result);

// Exercise: Given an array of numbers, create a new array that contains only negative numbers.

// const numbers = [-10, -4, -2, 0, 1, 4, 6, 10];

// const result = numbers.filter((element) => element < 0);

// console.log(result);

// Exercise: Given an array of numbers, create a new array
//  that includes only numbers that are divisible by both 2 and 3.

// const divisibleNumbers = [2, 3, 6, 10, 12, 18, 20];

// const result = divisibleNumbers.filter(
//   (element) => element % 2 === 0 && element % 3 === 0
// );

// console.log(result);

//result [6, 12, 18]

// Exercise: Given an array of names,
//  return a new array where each name has its length attached to it (e.g., "Alice (5)").

// const names = [
//   "Unejs",
//   "Bajram",
//   "Agron",
//   "vladimir",
//   "bunjamin",
//   "abdulkaderArnauti",
// ];

// const result = names.map((element) => element + "(" + element.length + ")");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Capitalize Names (using .map())
// Task: Given an array of lowercase names, create a new array where each name has its first letter capitalized.

// const names = ["edumind", "academy", "javascript", "html"];

// const result = names.map(
//   (element) =>
//     element.slice(0, element.length - 1).toUpperCase() +
//     element[element.length - 1]
// );

// console.log(result);

//rezultat = ["EDUMINd", "ACADEMy", "JAVASCRIPTt", "HTMl"]

// Exercise: Multiply by Index (using .map())
// Task: Given an array of numbers,
//  create a new array where each element is multiplied by its index in the array.

// const numbers = [10, 15, 20, 30];

// const result = numbers.map((element, index) => element * index);

// console.log(result);

//rezultati: [0, 15, 40, 90]

// Exercise: Remove Empty Strings (using .filter())
// Task: Given an array of strings, filter out all empty strings.

// const emptyStrings = ["edumind", "", "academy", "", "", "javascript"];

// const result = emptyStrings.filter((element) => element);

// console.log(result);

//rezultati = ["edumind", "academy", "javascript"]

// Square Positive Numbers (using .filter() and .map())
// Task: Given an array of numbers, create a new array that squares only the positive numbers.

// const numbers = [-3, -2, -1, 0, 1, 2, 3, 4];

// const result = numbers
//   .filter((element) => element >= 0)
//   .map((element) => element * element);

// console.log(result);

//rezultati: [0, 1, 4, 9, 16]

// Exercise: Double Odd Numbers (using .filter() and .map())
// Task: Given an array of numbers, create a new array that doubles only the odd numbers.

// const array = [1, 2, 3, 4, 5, 6];

// const result = array
//   .filter((element) => element % 2 === 1)
//   .map((element) => element * 2);

//rezultat = [2, 6, 10]

//  Convert to Boolean (using .map())
// Task: Given an array of values, create a new array where each value is converted to true or false.

const values = ["", "edumind", 0, 10, undefined, null];

const rezultati = values.map((element) => (element ? true : false));

console.log(rezultati);

//[false, true, false, true, false, false ]

// Exercise: Given an array of strings, create a new array that only includes strings containing the letter "a".

// Exercise: Given an array of numbers, use .filter to keep only the even numbers,
// then use .map to add 1 to each even number, and finally use .forEach to log each modified number.

// Exercise: Given an array of strings, use .filter to select words that start with the letter "b",
// then use .map to convert each word to uppercase, and finally use .forEach to log each word.

// Exercise: Given an array of numbers, use .map to create a new array where each number is either "even" or "odd",
// based on whether the number is even or odd, and then use .forEach to log each result.
