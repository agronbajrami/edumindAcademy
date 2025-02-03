// let numri = 12;

//kontrollo numrin a eshte me i madh se 10
//true console.log(numri 12 eshte me i madh se 10)
//false console.log(numri 12 eshte me i vogel se 12)

// if (numri >= 10) {
//   console.log(`numri ${numri} eshte me i madh se 10`);
// } else {
//   console.log(`numri ${numri} nuk eshte me i madh se 10`);
// }

// if (numri > 0) {
//   console.log(`pozitiv`);
// } else if (numri === 0) {
//   console.log("neutral");
// } else {
//   console.log(`negativ`);
// }

// let numri = 1171;

// if (numri > 99 && numri < 1000) {
//   console.log("treshifror");
// } else {
//   console.log("nuk eshte");
// }

//kontrollo nje shkronje a eshte zanore apo bashtingllore

// let shkronja = "e";

// if (
//   shkronja === "a" ||
//   shkronja === "e" ||
//   shkronja === "i" ||
//   shkronja === "o" ||
//   shkronja === "u" ||
//   shkronja === "y"
// ) {
//   console.log("eshte zanore");
// } else {
//   console.log("bashtingllore");
// }

//kontrolloj piket shiko cfar note

// let piket = -85;
// //50-60 2
// //60-70 3
// //70-80 4
// //80 5

// if (piket > 0 && piket < 50) {
//   console.log("NJISH *");
// } else if (piket >= 50 && piket < 60) {
//   console.log("2");
// } else if (piket >= 60 && piket <= 70) {
//   console.log(3);
// } else if (piket > 70 && piket <= 80) {
//   console.log(4);
// } else if (piket > 80 && piket < 101) {
//   console.log(5);
// } else {
//   console.log("gabim");
// }

//prej tre numrave kontrollo cili eshte me i madhi

//kontrollo cila dit e javes eshte

// let dita = 3;

//kontrollo nese nje numer pjestohet me 3 dhe me 5
//3 console.log('TIK')
//5 console.log('TAK')
//3 dhe 5 console.log('TIK TAK')

// 1. Temperature Feedback
// Write a function that takes a temperature value and returns feedback based on these conditions:

// If the temperature is greater than 30, return "It's hot!"
// If the temperature is between 15 and 30 (inclusive), return "It's warm."
// If the temperature is below 15, return "It's cold."

// function checkTemperatur(temperatura) {
//   if (temperatura > 30) {
//     console.log("Eshte nxeht");
//   } else if (temperatura >= 15 && temperatura <= 30) {
//     console.log("Eshte normal");
//   } else {
//     console.log("Ftoht");
//   }
// }

// checkTemperatur(24);

// 2. Password Strength Checker
// Write a function that checks if a password is strong based on these rules:

// Must be at least 8 characters long

// let password = "asdsakdjakdjksad";

// if (password.length >= 8) {
//   console.log("Correct");
// } else {
//   console.log("incorrect");
// }

// 3. Traffic Light Simulator
// Write a function that takes a string representing the color of a traffic light ("red", "yellow", "green") and returns the action a driver should take:

// "red": Return "Stop"
// "yellow": Return "Slow down"
// "green": Return "Go"

// let ngjyraSemaforit = "red";

// if (ngjyraSemaforit === "red") {
//   console.log("STOP");
// } else if (ngjyraSemaforit === "yellow") {
//   console.log("Slow down");
// } else if (ngjyraSemaforit === "green") {
//   console.log("GOOOO");
// }

// 4. Calculate Discount
// Write a function that calculates the discount based on the total amount:

// If the total is greater than $500, apply a 20% discount.
// If the total is between $200 and $500, apply a 10% discount.
// If the total is less than $200, no discount applies.
// Return the final price after the discount is applied.

// let price = 300;

// if (price > 500) {
//   console.log(price * 0.8);
// } else if (price >= 200 && price <= 500) {
//   console.log(price * 0.9);
// } else {
//   console.log(price);
// }

// 5. Determine Age Group
// Write a function that takes a person’s age and returns their age group:

// "Child": Age 0-12
// "Teen": Age 13-19
// "Adult": Age 20-64
// "Senior": Age 65+

// 6. Check Range
// Write a function that takes a number as input
// and returns "Within range" if the number is between 10 and 50
// (inclusive), otherwise return "Out of range".

// let numri = 20;

// if (numri >= 10 && numri <= 50) {
//   console.log("inclusive");
// } else {
//   console.log("out of range");
// }

// 8. Check if All Characters in a String Are Uppercase
// Write a function that takes a string and checks
// if all the characters in the string are uppercase.
//  Return "All Uppercase" if they are, otherwise return "Not All Uppercase".

// let teksti = "EDUMINd";

// if (teksti === teksti.toUpperCase()) {
//   console.log("All Uppercase");
// } else {
//   console.log("Not all Uppercase");
// }

// let numri = 0;

// if (numri > 10) {
//   console.log("nurmi eshte me i madh");
// } else {
//   console.log("ma i vogel");
// }

// let numri = 3;

// if (numri % 2 === 0) {
//   console.log("cift");
// } else {
//   console.log("tek");
// }

// let dita = 8
