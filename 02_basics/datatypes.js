"use strict"; // treat all js code as newer version

// alert("hello")  using nodejs

// Primitive Data Types
// 1. Number => 2 to power 53
// 2. BigInt => for larger numbers
// 3. String => ""
// 4. Boolean => true/false
// 5. null => standalone value
// 6. undefined => value not assigned
// 7. Symbol => unique

// Non-Primitive (Reference) Types
// 1. Object
// 2. Array
// 3. Function

// Example of typeof operator
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof userEmail); // undefined
console.log(id === anotherId); // false
console.log(typeof anotherId); // symbol


//***********************************
// Non-Primitive (Reference) Data Types in JavaScript

// 1. Arrays
const fruits = ["apple", "banana", "orange"];
console.log("\n=== Arrays ===");
console.log(fruits, typeof fruits); // object
console.log(Array.isArray(fruits)); // true
console.log(fruits.length); // 3
fruits.push("mango"); // arrays are mutable even if const
console.log(fruits);

// 2. Objects
const person = {
  name: "John",
  age: 30,
  isEmployed: true,
  hobbies: ["reading", "music"],
  address: {
    street: "123 Main St",
    city: "Boston",
  },
};
console.log("\n=== Objects ===");
console.log(person, typeof person); // object
console.log(person.name); // dot notation
console.log(person["age"]); // bracket notation
person.email = "john@example.com"; // adding new property
console.log(person);

// 3. Functions
function greet(name) {
  return `Hello, ${name}!`;
}
const sayHi = function (name) {
  return `Hi, ${name}!`;
};
console.log("\n=== Functions ===");
console.log(typeof greet); // function
console.log(greet("Alice")); // Hello, Alice!
console.log(sayHi("Borderland")); // Hi, Borderland!
// 4. Dates
const today = new Date();
console.log("\n=== Dates ===");
console.log(today, typeof today); // object
console.log(today.getFullYear()); // current year

// 5. RegExp (Regular Expressions)
const pattern = /hello/i;
console.log("\n=== RegExp ===");
console.log(pattern, typeof pattern); // object
console.log(pattern.test("Hello World")); // true

// Reference Type Behavior
console.log("\n=== Reference Type Behavior ===");

// Array reference
const arr1 = ["a", "b", "c"];
const arr2 = arr1; // reference copy
arr2.push("d");
console.log("arr1:", arr1); // ["a", "b", "c", "d"]
console.log("arr2:", arr2); // ["a", "b", "c", "d"]
console.log("arr1 === arr2:", arr1 === arr2); // true

// Object reference
const obj1 = { x: 10 };
const obj2 = obj1; // reference copy
obj2.x = 20;
console.log("obj1:", obj1); // { x: 20 }
console.log("obj2:", obj2); // { x: 20 }
console.log("obj1 === obj2:", obj1 === obj2); // true

// Copying objects and arrays
console.log("\n=== Copying Reference Types ===");

// Shallow copy methods
const arr3 = [...arr1]; // spread operator
const obj3 = { ...obj1 }; // spread operator
const arr4 = Array.from(arr1); // Array.from()
const obj4 = Object.assign({}, obj1); // Object.assign()

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(person)); // Deep copy (with limitations)

// Memory allocation
console.log("\n=== Memory Allocation ===");
// Compare objects properly using JSON.stringify or lodash isEqual
console.log("Objects equal:", JSON.stringify({ x: 10 }) === JSON.stringify({ x: 10 })); // true
console.log("Arrays equal:", JSON.stringify([1, 2]) === JSON.stringify([1, 2])); // true

//*** */


// primitive = stack
// non-primitive = heap
// primitive types: number, string, boolean, undefined, null, symbol
// non-primitive types: object, array, function