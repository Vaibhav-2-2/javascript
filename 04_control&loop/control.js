// 1. If-else statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 2. If-else if-else statement
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// 3. Switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("TGIF!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Regular work day");
}

// 4. Ternary operator
let isRaining = true;
let action = isRaining ? "Take umbrella" : "Enjoy the sun";
console.log(action);

// 5. Try-catch statement
try {
  // Attempting to use undefined variable
  console.log(undefinedVariable);
} catch (error) {
  console.log("An error occurred:", error.message);
} finally {
  console.log("This always executes");
}

// 6. Truthy and Falsy values
// Falsy values in JavaScript
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Truthy values in JavaScript
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true

// Examples in conditional statements
let username = "";
if (username) {
  console.log("Username is provided");
} else {
  console.log("Username is empty"); // This will execute
}

let items = [];
if (items) {
  console.log("Array exists (truthy)"); // This will execute
} else {
  console.log("Array is empty");
}

// 7. Nullish coalescing operator (??)
let userPreference = null;
let defaultPreference = "dark";
let theme = userPreference ?? defaultPreference;
console.log(theme); // Output: "dark"

// Example with multiple ?? operators
let firstName = null;
let middleName = undefined;
let lastName = "Smith";
let displayName = firstName ?? middleName ?? lastName ?? "Anonymous";
console.log(displayName); // Output: "Smith"

// Difference between ?? and ||
let count = 0;
let fallbackCount = 5;
console.log(count ?? fallbackCount); // Output: 0 (preserves 0)
console.log(count || fallbackCount); // Output: 5 (treats 0 as falsy)
