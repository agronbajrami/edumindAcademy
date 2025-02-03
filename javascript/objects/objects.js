// 1. Filter Users by Age
// Objective: Filter out users who are under 18 years old.

// Instructions:

// You have an array of user objects. Use .filter to create a new array of users who are 18 or older.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 16 },
// ];

// const res = users.filter((user) => user.age > 18);

// console.log(res);

// 2. Map Usernames to Uppercase
// Objective: Create an array of usernames in uppercase.

// Instructions:

// Use .map to transform the name property of each user into uppercase and store it in a new array.
// javascript
// Copy code
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 30 },
// ];

// const res = users.map((user) => user.name.toUpperCase());

// console.log(res);

// Output should be: ["ALICE", "BOB", "CHARLIE"]

// 3. Calculate Total Salary
// Objective: Calculate the total salary of all employees.

// Instructions:

// You have an array of employee objects. Use .forEach to calculate the total salary.
// javascript
// const employees = [
//   { name: "Alice", salary: 50000 },
//   { name: "Bob", salary: 60000 },
//   { name: "Charlie", salary: 70000 },
// ];
// let totalSalary = 0;

// employees.forEach((employee) => (totalSalary += employee.salary));

// console.log(totalSalary);
// Output should be: 180000

// 4. Filter and Map for Specific Property
// Objective: Get the names of students with grades above 75.

// Instructions:

// Use .filter to find students with a grade above 75.
// Then, use .map to create a new array that contains only the names of these students.
// javascript
// const students = [
//   { name: "Alice", grade: 80 },
//   { name: "Bob", grade: 65 },
//   { name: "Charlie", grade: 90 },
//   { name: "David", grade: 70 },
// ];

// const res = students
//   .filter((student) => student.grade > 75)
//   .map((student) => student.name);

// console.log(res);

//OUTPUT: ["Alice", "Charlie"]

// 5. Update Inventory Quantities
// Objective: Increase the quantity of each item in the inventory by 10.

// Instructions:

// Use .map to create a new array where each item's quantity is increased by 10.
// javascript

// const inventory = [
//   { item: "Apple", quantity: 30 },
//   { item: "Banana", quantity: 20 },
//   { item: "Orange", quantity: 25 },
// ];

// const updatedInventory = inventory.map((product) => ({
//   ...product,
//   quantity: product.quantity + 10,
// }));

// console.log(updatedInventory);
// Output should be:
// [
//   { item: "Apple", quantity: 40 },
//   { item: "Banana", quantity: 30 },
//   { item: "Orange", quantity: 35 }
// ]

// 6. Get List of All Roles
// Objective: Extract an array of unique roles from an array of employees.

// Instructions:

// Use .map to get the roles from the role property of each employee.
// Use new Set() to remove duplicates.
// javascript
// Copy code
// const employees = [
//   { name: "Alice", role: "Engineer" },
//   { name: "Bob", role: "Manager" },
//   { name: "Charlie", role: "Engineer" },
//   { name: "David", role: "Designer" },
// ];

// const roles = [...new Set(employees.map((employee) => employee.role))];

// const roles = [...new Set(employees.map(employee => employee.role))];
// console.log(roles);
// Output should be: ["Engineer", "Manager", "Designer"]

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

// 7. Count Items of a Certain Type
// Objective: Count how many items have a specific type.

// Instructions:

// Use .filter to find items of type "fruit".
// Then, get the count of these items using .length
// javascript

// const items = [
//   { name: "Apple", type: "fruit" },
//   { name: "Carrot", type: "vegetable" },
//   { name: "Banana", type: "fruit" },
//   { name: "Broccoli", type: "vegetable" },
// ];

// const result = items.filter((item) => item.type === "fruit");

// console.log(result.length);

// console.log(fruitCount);
// Output should be: 2

// 8. Create an Array of Descriptions
// Objective: Use .map() to create a description for each product.

// Instructions:

// Given an array of product objects, create a new array
//  where each item is a string description of the product in the format: "The [name] costs $[price]."
// Each product object has properties name and price.
// Example:

// const products = [
//   { name: "Shirt", price: 20 },
//   { name: "Pants", price: 40 },
//   { name: "Hat", price: 10 },
// ];

// const result = products.map(
//   (product) => `The ${product.name} costs $${product.price}`
// );

// console.log(result);
// console.log(descriptions);
// Output: ["The Shirt costs $20.", "The Pants costs $40.", "The Hat costs $10."]

// 9. Mark Students as Pass/Fail
// Objective: Use .map() to add a status property to each student.

// Instructions:

// Given an array of student objects, use .map() to add a status property to each student, where status is "Pass" if their score is 50 or above, otherwise "Fail".
// Each student object has properties name and score.
// Example:

// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 42 },
//   { name: "Charlie", score: 58 },
// ];

// const result = students.map((student) => ({
//   ...student,
//   status: student.score > 50 ? "Pass" : "Fail",
// }));

// console.log(result);
// Output:
// [
//   { name: "Alice", score: 85, status: "Pass" },
//   { name: "Bob", score: 42, status: "Fail" },
//   { name: "Charlie", score: 58, status: "Pass" }
// ]

// 10. Transform and Filter Employees by Role
// Objective: Use .map() and .filter() to transform and filter data.

// Instructions:

// Given an array of employee objects,
//  use .map() to create a new array that only includes name and role,
//  then use .filter() to keep only those with the role "Developer".
// Each employee object has properties name, role, and salary.
// Example:

// const employees = [
//   { name: "Alice", role: "Developer", salary: 80000 },
//   { name: "Bob", role: "Designer", salary: 70000 },
//   { name: "Charlie", role: "Developer", salary: 90000 },
// ];

// const result = employees
//   .map((employee) => ({
//     name: employee.name,
//     role: employee.role,
//   }))
//   .filter((employee) => employee.role === "Developer");

// console.log(result);

//OUTPUT: [{name: "Alice", role: "Developer"}, {name: "Charlie", role: "Developer"}]

// 11. List People Who Have Both a Car and a House
// Objective: Use .filter() to find people who have both a car and a house.

// Instructions:

// Given an array of people objects, use .filter() to find people who have both hasCar and hasHouse set to true.
// Each person object has properties name, hasCar, and hasHouse.
// Example:

// const people = [
//   { name: "Alice", hasCar: true, hasHouse: true },
//   { name: "Bob", hasCar: false, hasHouse: true },
//   { name: "Charlie", hasCar: true, hasHouse: false },
// ];

// const res = people.filter((p) => p.hasCar && p.hasHouse);

// console.log(res);

// 12. Add a Property Based on Existing Data
// Objective: Use .map() to add a new property based on other properties.

// Instructions:

// Given an array of people objects, use .map() to add a new property isAdult that is true if their age is 18 or above, and false otherwise.
// Each person object has properties name and age.
// Example:

// const people = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 15 },
//     { name: "Charlie", age: 22 }
// ];

// console.log(withIsAdult);
// Output:
// [
//   { name: "Alice", age: 20, isAdult: true },
//   { name: "Bob", age: 15, isAdult: false },
//   { name: "Charlie", age: 22, isAdult: true }
// ]

// 13. Find First Item Matching Condition
// Objective: Use .find() to get the first item matching a specific condition.

// Instructions:

// Given an array of user objects, use .find() to return the first user who is older than 30.
// Each user object has properties name and age.
// Example:

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Charlie", age: 40 },
// ];

// const result = users.find((user) => user.age > 30);

// console.log(result);

// console.log(firstOver30);
// Output: { name: "Bob", age: 35 }

// 14. Check if All Items Match Condition
// Objective: Use .every() to check if all items in an array match a condition.

// Instructions:

// Given an array of items, use .every() to check if every item is in stock (i.e., stock is greater than 0).
// Each item object has properties name and stock.
// Example:

// const inventory = [
//   { name: "Laptop", stock: 10 },
//   { name: "Phone", stock: 0 },
//   { name: "Tablet", stock: 5 },
// ];

// const result = inventory.every((item) => item.stock > 0);

// console.log(result);

// console.log(allInStock);
// Output: false

// 15. Extract Names of All Active Users
// Objective: Use .filter() and .map() to get the names of all users who are active.

// Instructions:

// Given an array of user objects, use .filter() to select only the active users and .map() to extract their names.
// Each user object has name and isActive properties.
// Example:

// const users = [
//     { name: "Alice", isActive: true },
//     { name: "Bob", isActive: false },
//     { name: "Charlie", isActive: true }
// ];

// const activeUserNames = users.filter(user => user.isActive).map(user => user.name);

// console.log(activeUserNames);
// Output: ["Alice", "Charlie"]

console.log("sadsad".padStart());
