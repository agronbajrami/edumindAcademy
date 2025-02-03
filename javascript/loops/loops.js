// bane nje for loop qe fillon prej n0 dhe mbaron deri ne 11
// dhe bane console.log vetem numrat cift

// for (let counter = 0; counter < 12; counter++) {
//   if (counter % 2 === 0) {
//     console.log("cift" + counter);
//   }
// }

//per nje array kontrollo cilat numra jan tek

// const numrat = [2, 6, 7, 11, 22, 13, 8];

// for (let counter = 0; counter < numrat.lenth; counter++) {
//   if (numrat[counter] % 2 === 1) {
//     console.log("tek" + numrat[counter]);
//   }
// }

// per nje array me numra kontrollo cili numer eshte me i madhi

// const numrat = [2, 6, 7, 11, 22, 13, 8];
// let max = 0; //22

// for (let counter = 0; counter < numrat.length; counter++) {
//   if (numrat[counter] > max) {
//     max = numrat[counter];
//   }
// }

// console.log(max);

// per nje array me numra kontrollo cili numer eshte me i vogli
// const numrat = [2, 6, 7, 11, 22, 13, 8, 1];
// let min = 10000000000;

// for (let counter = 0; counter < numrat.length; counter++) {
//   if (numrat[counter] < min) {
//     min = numrat[counter];
//   }
// }

// console.log(min);

// shumen e nje array

// const array = [1, 2, 3, 4, 5, 6];
// let shuma = 0;

// for (let counter = 0; counter < array.length; counter++) {
//   shuma = shuma + array[counter];
// }

// console.log(shuma);

// kontrollo sa numra cift ke ne nje array

// const array = [1, 2, 3, 4, 5, 6];

// let shuma = 0;//1

// for (let counter = 0; counter < array.length; counter++) {
//   if (array[counter] % 2 === 0) {
//     shuma++;
//   }
// }

// console.log(shuma);

// numrat cift vendosi ne nje array tjeter

// const array = [1, 2, 3, 4, 5, 6];

// const arraytjeter = [];

// for (let counter = 0; counter < array.length; counter++) {
//   if (array[counter] % 2 === 0) {
//     arraytjeter.push(array[counter]);
//   }
// }

// console.log(arraytjeter);

// per nje array me fjale kontrollo cila fjale eshte me e madhja

// numrat tek rrit per aq sa eshte numri i tyre

// const array = [7, 8, 9, 10, 11, 12];

// for (let counter = 0; counter < array.length; counter++) {
//   if (array[0] % 2 === 1) {
//     array[counter] = array[counter] * 2;
//   }
// }

// console.log(array);

// per nje array me fjale kontrollo cila fjale eshte me e vogla

// ne nje array shfaqi te gjitha fjalet qe e kan tekstin apple

//const fruits = ['bananas', 'apple', 'pineapple', "kiwi", "strawberry"]

// ne nje array shfaqi te gjitha fjalet qe fillojn me zanore

// const fjalet = ["tekst", "agron", "basketboll", "anije", "zanore", "ananas"];

// for (let counter = 0; counter < fjalet.length; counter++) {
//   if (
//     // tekst
//     fjalet[counter][fjalet[counter].length] === "a" || //tekst === a
//     fjalet[counter][fjalet[counter].length] === "e" ||
//     fjalet[counter][fjalet[counter].length] === "i" ||
//     fjalet[counter][fjalet[counter].length] === "o" ||
//     fjalet[counter][fjalet[counter].length] === "u" ||
//     fjalet[counter][fjalet[counter].length] === "y"
//   ) {
//     console.log(fjalet[counter]);
//   }
// }

// ne nje array shfaqi te gjitha fjalet qe mbarojn me bashtingllore

// shpjego nested for

// for (let i = 1; i <= 10000; i++) {
//   for (let j = 1; j > 0; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// // tabelen shumzimit
//
//
//
//
//

//gjeje mesetaren e nji arrayt

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let shuma = 0;

// for (let counter = 0; counter < array.length; counter++) {
//   shuma = shuma + array[counter];
// }

// console.log(shuma / array.length);

// Create a function countDivisibleBy3
//  that takes an array of numbers
// and returns how many numbers in the array are divisible by 3.

// function countDivisibleBy(vargu, divisibleBy) {
//   for (let counter = 0; counter < vargu.length; counter++) {
//     if (vargu[counter] % divisibleBy === 0) {
//       console.log(vargu[counter]);
//     }
//   }
// }

// const vargu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const divisibleBy = 4;

// countDivisibleBy(vargu, divisibleBy);

//krijo njo loop i cili fillon
//prej 0 dhe mbaron deri ne 20 dhe me te krijo
//nje array i cili do te permban
//vetem numra tek te indeksave(pozitave)

// const tek = [];

// for (let counter = 0; counter <= 20; counter++) {
//   if (counter % 2 === 1) {
//     tek.push(counter);
//   }
// }
// console.log(tek);

// Remove Specific Element
// Write a function removeElement that
//  takes an array and a value,
// and returns a new array with
// all occurrences of that value removed.

// const fruits = ["apple", "kiwi", "bostan", "karpuz", "shalqir"];
// const value = "kiwi";

// function removeElement(array, value) {
//   let test = [];
//   for (let counter = 0; counter < array.length; counter++) {
//     if (array[counter] === value) {
//     } else {
//       test.push(array[counter]);
//     }
//   }
//   console.log(test);
// }

// removeElement(fruits, value);

//
//
//
//vazhdim oren e ardhshme
//
//
//

// Write a function mergeArrays that takes two arrays and
// returns a new array containing all elements of both arrays.

// const array1 = [1, 2, 3, 4];
// const array2 = [5, 6, 7, 8];
// const array3 = [9, 10, 11, 12];

// const newArray = [...array1, ...array2, ...array3];

// console.log(newArray);
//rezultati: [1, 2, 3, 4, 5, 6, 7, 8]

// ne nje array shfaqi te gjitha fjalet qe e kan tekstin apple

// const fruits = ["bananas", "apple", "pineapple", "kiwi", "strawberry"];

// for (let counter = 0; counter < fruits.length; counter++) {
//   if (fruits[counter].includes("apple")) {
//     console.log(fruits[counter]);
//   }
// }

// Filter Words Longer Than N
// Write a function filterLongWords that takes an array of words and a number n,
//  and returns an array of words that are longer than n characters.

// const fruits = ["bananas", "apple", "pineapple", "kiwi", "strawberry"];

// function filterLongWords(fruits, n) {
//   for (let counter = 0; counter < fruits.length; counter++) {
//     if (fruits[counter].length > n) {
//       console.log(fruits[counter]);
//     }
//   }
// }

// filterLongWords(fruits, 5);

// per nje array me fjale kontrollo cila fjale eshte me e vogla

// const fruits = ["bananas", "apple", "pineapple", "kiwi", "strawberry"];
// let minimum = 10000000;
// let emri = "";

// for (let counter = 0; counter < fruits.length; counter++) {
//   if (fruits[counter].length < minimum) {
//     minimum = fruits[counter].length;
//     emri = fruits[counter];
//   }
// }

// console.log(emri);
// Count Word Occurrences
// Write a function countWordOccurrences that takes a string and a word,
//  and returns the number of times the word occurs in the string.

// const fjala = "the cat had a great meal in the counter";

// function countWordOccurrences(fjala, word) {
//   const array = fjala.split(" ");
//   let occured = 0;
//   for (let counter = 0; counter < array.length; counter++) {
//     if (array[counter] === word) {
//       occured++;
//     }
//   }

//   console.log(occured);
// }

// countWordOccurrences(fjala, "the");

// const fjala = "the cat had a great meal in the counter";

// let rezultati = fjala.replaceAll(" ", "");

// console.log(rezultati);

//Remove Spaces from a String
// Write a function removeSpaces that takes a string
// and returns the string without any spaces.

// Write a function alternateCase that takes
// a string and alternates the case of its letters,
//  starting with lowercase.

// Example: alternateCase("Hello World") -> "hElLo WoRlD"
// let text = "Hello World";

// let textWithoutSpace = text.replace(" ", ""); //HelloWorld

// let rezultati = "";

// for (let counter = 0; counter < textWithoutSpace.length; counter++) {
//   if (counter % 2 === 0) {
//     rezultati += textWithoutSpace[counter].toLowerCase();
//   } else {
//     rezultati += textWithoutSpace[counter].toUpperCase();
//   }
// }

// console.log(rezultati.replace("W", " W"));

// Count Words in a String
// Write a function countWords that takes a string and
//  returns the number of words in the string.

// const array = [12, "asd", true, "false", "edumind", 102]; // 3
// let occured = 0;

// for (let counter = 0; counter < array.length; counter++) {
//   if (typeof array[counter] === "string") {
//     occured++;
//   }
// }

// console.log(occured);
//KTU ME VAZHDUUU

//Reverse array using loops and arrays

// const vargu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const reversedArray = [];

// for (let counter = vargu.length - 1; counter >= 0; counter--) {
//   reversedArray.push(vargu[counter]);
// }

// console.log(reversedArray);

// Write a function that prints the numbers from 1 to 100,
//  but for multiples of 3, print "Fizz"
// instead of the number, and for multiples of 5, print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

// for (let counter = 1; counter <= 100; counter++) {
//   if (counter % 5 === 0 && counter % 3 === 0) {
//     console.log(counter, " FIZZBUZZ");
//   } else if (counter % 3 === 0) {
//     console.log(counter, " FIZZ");
//   } else if (counter % 5 === 0) {
//     console.log(counter, " BUZZ");
//   }
// }

// Sum of Squares
// Write a function sumOfSquares that takes an array of
// numbers and returns the sum of the squares of all numbers.

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let counter = 0; counter < array.length; counter++) {
//   sum += Math.pow(array[counter], 2);
// }

// console.log(sum);

// Create a function allOdd that returns
// an array of all odd numbers between two given numbers a and b.
// Example: allOdd(3, 10) -> [3, 5, 7, 9]

// function allOdd(a, b) {
//   let array = [];

//   for (let counter = a; counter <= b; counter++) {
//     if (counter % 2 === 1) {
//       array.push(counter);
//     }
//   }

//   console.log(array);
// }

// allOdd(30, 100);

// Remove Duplicates from an Array

// const array = [1, 2, 3, 4, 1, 2, 7, 8, 9];

// const uniqueArray = [];

// for (let counter = 0; counter < array.length; counter++) {
//   if (!uniqueArray.includes(array[counter])) {
//     uniqueArray.push(array[counter]);
//   }
// }

// console.log(uniqueArray);

// you have 2 arrays find the common elements in those arrays

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];

// const commonArray = [];

// for (let counter = 0; counter < 4; counter++) {
//   if (array1.includes(array2[counter])) {
//     commonArray.push(array2[counter]);
//   }
// }

// console.log(commonArray);

//rezulati: [3, 4]

// reverse each word, do not use array use normal string

let string = "Hello students you are here in Edumind Academy";

const array = string.split(" ");

let reversedWords = [];

for (let counter = 0; counter < array.length; counter++) {
  let word = "";
  for (let j = array[counter].length - 1; j >= 0; j--) {
    word += array[counter][j];
  }
  reversedWords.push(word);
}

console.log(reversedWords.join(" "));
// shahin

// let sum = 0;
// let counter = 0;

// while (counter < array.length) {
//   sum += array[counter];

//   counter++;
// }

// console.log(sum);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let counter = 0;

// while (counter < array.length) {
//   if (array[counter] % 2 === 0) {
//     console.log(array[counter]);
//     break;
//   }

//   counter++;
// }
