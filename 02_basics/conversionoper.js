// Type Conversion Operations in JavaScript

// 1. String Conversion
let score = 33;
let stringScore = String(score);
console.log(typeof stringScore); // "string"
console.log(typeof score); // "number"

// 2. Number Conversion
let userInput = "123";
let numericInput = Number(userInput);
console.log(typeof numericInput); // "number"

// Number conversion examples
let validNumber = Number("123"); // 123
let invalidNumber = Number("123abc"); // NaN not a number
let boolToNum = Number(true); // 1
let nullToNum = Number(null); // 0
let undefinedToNum = Number(undefined); // NaN

// 3. Boolean Conversion
let isActive = Boolean(1); // true
let isInactive = Boolean(0); // false
let emptyString = Boolean(""); // false
let nonEmptyString = Boolean("hello"); // true

// Truthy and Falsy values
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

console.log(Boolean("hello")); // true
console.log(Boolean(1)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// Type Coercion (automatic conversion)
let result = "3" + 2; // "32" (string)
let result2 = "3" - 2; // 1 (number)
let result3 = "3" * 2; // 6 (number)
console.log(result, typeof result);
console.log(result2, typeof result2);
console.log(result3, typeof result3);

// Interesting Cases
console.log("5" + 3); // "53"
console.log("5" - 3); // 2
console.log("5" * "3"); // 15
console.log("5" / "3"); // 1.6666...
console.log(3 + 4 + "5"); // "75"
console.log("5" + 3 + 4); // "534"

// ************************** operations in js ***************************************

// 1. Arithmetic Operations
let num1 = 10;
let num2 = 3;

console.log("Arithmetic Operations:");
console.log("Addition:", num1 + num2); // 13
console.log("Subtraction:", num1 - num2); // 7
console.log("Multiplication:", num1 * num2); // 30
console.log("Division:", num1 / num2); // 3.333...
console.log("Modulus:", num1 % num2); // 1 (remainder)
console.log("Exponentiation:", num1 ** num2); // 1000 (10^3)

// Increment and Decrement
let counter = 5;
console.log("Prefix increment:", ++counter); // 6 (increments first, then returns)
console.log("Postfix increment:", counter++); // 6 (returns first, then increments)
console.log("Final value:", counter); // 7

// 2. Assignment Operators
let x = 5;
x += 3; // x = x + 3
x -= 2; // x = x - 2
x *= 4; // x = x * 4
x /= 2; // x = x / 2
x %= 3; // x = x % 3
x **= 2; // x = x ** 2

// 3. Comparison Operators
console.log("\nComparison Operations:");
console.log("Equal value:", 5 == "5"); // true (loose equality)
console.log("Strict equal:", 5 === "5"); // false (strict equality)
console.log("Not equal:", 5 != "6"); // true
console.log("Strict not equal:", 5 !== "5"); // true
console.log("Greater than:", 5 > 3); // true
console.log("Less than:", 5 < 8); // true
console.log("Greater or equal:", 5 >= 5); // true
console.log("Less or equal:", 5 <= 6); // true

// 4. Logical Operators
console.log("\nLogical Operations:");
console.log("AND:", true && false); // false
console.log("OR:", true || false); // true
console.log("NOT:", !true); // false

// 5. Bitwise Operators
console.log("\nBitwise Operations:");
console.log("AND:", 5 & 3); // 1
console.log("OR:", 5 | 3); // 7
console.log("XOR:", 5 ^ 3); // 6
console.log("NOT:", ~5); // -6
console.log("Left shift:", 5 << 1); // 10
console.log("Right shift:", 5 >> 1); // 2

// 6. String Operations
console.log("\nString Operations:");
let str1 = "Hello";
let str2 = "World";
console.log("Concatenation:", str1 + " " + str2); // Hello World
console.log("Template literal:", `${str1} ${str2}`); // Hello World

// 7. Ternary Operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("\nCan vote:", canVote); // Yes

// 8. Nullish Coalescing Operator (??)
let user;
console.log(user ?? "Anonymous"); // "Anonymous"

// 9. Optional Chaining Operator (?.)
const obj = {
  name: "John",
  address: {
    street: "123 Main St",
  },
};
console.log(obj?.address?.street); // "123 Main St"
console.log(obj?.contact?.phone); // undefined

// 10. Type Operators
console.log("\nType Operations:");
console.log("typeof:", typeof 42); // "number"
console.log("instanceof:", [] instanceof Array); // true
