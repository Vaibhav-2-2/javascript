// 1. Using var (older way - function scoped)
var firstName = "John";
var age = 25;
var isLoggedIn = true;

// 2. Using let (modern way - block scoped)
let lastName = "Doe";
let score = 100;
let isActive = false;

me = "vaibhav";

// 3. Using const (for constant values that won't change)
const userId = "123abc";
let PI = 3.14;
const GRAVITY = 9.81;
let state;

// This will cause a TypeError: Assignment to constant variable
PI = 26; // Error! Cannot reassign a const variable
console.log(PI);
console.table([
  firstName,
  lastName,
  age,
  isLoggedIn,
  score,
  isActive,
  userId,
  PI,
  GRAVITY,
  me,
  state,
]);

// {
//   this is scope : prefer not to use var because of block scope and functional scope
// }
