// 1. For Loop - most basic loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// 2. While Loop - runs while a condition is true
let count = 0;
while (count < 3) {
  console.log(`Count is ${count}`);
  count++;
}

// 3. Do...While Loop - runs at least once
let num = 0;
do {
  console.log(`Number is ${num}`);
  num++;
} while (num < 2);

// 4. For...of Loop - iterating over arrays
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

// 5. For...in Loop - iterating over object properties
const person = {
  name: "John",
  age: 30,
  city: "New York",
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 6. Array methods like forEach
const numbers = [1, 2, 3];
numbers.forEach((number, index) => {
  console.log(`Number at index ${index} is ${number}`);
});

// 7. Array filter - creates new array with elements that pass a test
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4, 6]

// 8. Array map - creates new array by transforming each element
const doubled = numbers2.map((num) => num * 2);
console.log("Doubled numbers:", doubled); // [2, 4, 6, 8, 10, 12]

// 9. Array reduce - reduces array to single value
const sum = numbers2.reduce((total, current) => total + current, 0);
console.log("Sum of numbers:", sum); // 21

// Example combining methods
const result = numbers2
  .filter((num) => num % 2 === 0) // Keep even numbers
  .map((num) => num * 2) // Double them
  .reduce((sum, num) => sum + num, 0); // Add them up
console.log("Result of chain:", result); // 24



// Additional map examples
const names = ["john", "jane", "bob"];
const capitalizedNames = names.map((name) => name.toUpperCase());
console.log("Capitalized names:", capitalizedNames); // ['JOHN', 'JANE', 'BOB']

// Map with objects
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

// Extract just the names
const userNames = users.map((user) => user.name);
console.log("User names:", userNames); // ['John', 'Jane', 'Bob']

// Transform objects
const userSummaries = users.map((user) => ({
  summary: `${user.name} is ${user.age} years old`,
  isAdult: user.age >= 18,
}));
console.log("User summaries:", userSummaries);

// Map with index parameter
const numberedList = names.map((name, index) => `${index + 1}. ${name}`);
console.log("Numbered list:", numberedList); // ['1. john', '2. jane', '3. bob']
