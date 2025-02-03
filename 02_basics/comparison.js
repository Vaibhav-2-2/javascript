// JavaScript Comparison Operations

// Basic Comparisons
console.log("\n=== Basic Comparisons ===");
console.log(2 > 1); // true
console.log(2 >= 2); // true
console.log(2 < 1); // false
console.log(2 <= 2); // true

// Equality Comparisons
console.log("\n=== Equality vs Strict Equality ===");
console.log("2 == 2:", 2 == 2); // true
console.log("2 == '2':", 2 == "2"); // true (loose equality - type coercion happens)
console.log("2 === '2':", 2 === "2"); // false (strict equality - no type coercion)

// Null and Undefined Comparisons
console.log("\n=== Null and Undefined ===");
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false
console.log("null == 0:", null == 0); // false
console.log("null >= 0:", null >= 0); // true (null converts to 0)
console.log("null <= 0:", null <= 0); // true

// String Comparisons
console.log("\n=== String Comparisons ===");
console.log("'2' > 1:", "2" > 1); // true (string "2" converts to number 2)
console.log("'02' > 1:", "02" > 1); // true
console.log("'hello' > 'Hello':", "hello" > "Hello"); // true (lowercase > uppercase)

// Special Cases
console.log("\n=== Special Cases ===");
console.log("true == 1:", true == 1); // true
console.log("false == 0:", false == 0); // true
console.log("'' == false:", "" == false); // true (both convert to 0)
console.log("'' === false:", "" === false); // false (different types)

// NaN Comparisons
console.log("\n=== NaN Cases ===");
console.log("NaN == NaN:", NaN == NaN); // false
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true

// Object Comparisons
console.log("\n=== Object Comparisons ===");
console.log("{} == {}:", {} == {}); // false (different references)
console.log("[] == []:", [] == []); // false (different references)
console.log("[] == ![]:", [] == ![]); // true (tricky case!)

// Best Practices Examples
console.log("\n=== Best Practices ===");
let score = "100";
let price = 100;

// ❌ Bad Practice (loose equality)
console.log(score == price); // true, but might hide type issues

// ✅ Good Practice (strict equality)
console.log(score === price); // false, clearly shows type mismatch

// ✅ Better Practice (explicit conversion)
console.log(Number(score) === price); // true, intention is clear
