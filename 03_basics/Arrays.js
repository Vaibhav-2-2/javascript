// Array declaration
const myArray = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];

// Array methods
// 1. Adding/Removing elements
fruits.push("mango"); // adds to end
fruits.pop(); // removes from end
fruits.unshift("grape"); // adds to beginning
fruits.shift(); // removes from beginning

// 2. Array operations
const numbers = [1, 2, 3, 4, 5];
numbers.indexOf(3); // returns 2 (index of element)
numbers.includes(2); // returns true
numbers.join(" - "); // converts array to string with separator

// 3. Array manipulation
const newNumbers = numbers.slice(1, 4); // creates new array from index 1 to 3
numbers.splice(1, 2); // removes 2 elements starting from index 1

// 4. Array iteration
numbers.forEach((num) => {
  console.log(num);
});

// 5. Array transformation
const doubled = numbers.map((num) => num * 2);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// 6. Array spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

// 7. Array destructuring
const [first, second, ...rest] = fruits;
