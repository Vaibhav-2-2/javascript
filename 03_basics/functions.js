// Function Declaration
function sayHello(name) {
  return `Hello ${name}!`;
}

// Function Expression
const addNumbers = function (num1, num2) {
  return num1 + num2;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Function with default parameters
function greet(name = "Guest") {
  return `Welcome, ${name}`;
}

// Function with multiple parameters and multiple lines
const calculateArea = (length, width) => {
  const area = length * width;
  return area;
};

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This runs immediately!");
})();

// Function that returns an object (using arrow function)
const createUser = (name, age) => ({
  name: name,
  age: age,
});

// Example usage:
console.log(sayHello("John")); // Output: Hello John!
console.log(addNumbers(5, 3)); // Output: 8
console.log(multiply(4, 2)); // Output: 8
console.log(greet()); // Output: Welcome, Guest
console.log(calculateArea(10, 5)); // Output: 50
console.log(createUser("Alice", 25)); // Output: { name: "Alice", age: 25 }
