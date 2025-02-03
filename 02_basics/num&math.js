// Numbers and Math in JavaScript

// Number creation
const score = 400;
const balance = new Number(100);
console.log(score, typeof score); // 400 'number'
console.log(balance, typeof balance); // [Number: 100] 'object'

// Number methods
const otherNumber = 123.8966;
console.log("\n=== Number Methods ===");
console.log("toString:", otherNumber.toString()); // "123.8966"
console.log("toFixed(2):", otherNumber.toFixed(2)); // "123.90"
console.log("toPrecision(3):", otherNumber.toPrecision(3)); // "124"
console.log("toLocaleString:", (1000000).toLocaleString()); // "1,000,000"

// Math Object Methods
console.log("\n=== Math Methods ===");
console.log("abs:", Math.abs(-4)); // 4
console.log("round:", Math.round(4.6)); // 5
console.log("ceil:", Math.ceil(4.2)); // 5
console.log("floor:", Math.floor(4.9)); // 4
console.log("min:", Math.min(4, 3, 6, 8)); // 3
console.log("max:", Math.max(4, 3, 6, 8)); // 8

// Powers and Roots
console.log("\n=== Powers and Roots ===");
console.log("pow(2,3):", Math.pow(2, 3)); // 8
console.log("sqrt:", Math.sqrt(25)); // 5
console.log("cbrt:", Math.cbrt(27)); // 3

// Random Numbers
console.log("\n=== Random Numbers ===");
console.log("random:", Math.random()); // 0 to 1
console.log("1-10:", Math.floor(Math.random() * 10) + 1); // 1 to 10

// Trigonometry
console.log("\n=== Trigonometry ===");
console.log("sin:", Math.sin(Math.PI / 2)); // 1
console.log("cos:", Math.cos(0)); // 1
console.log("tan:", Math.tan(Math.PI / 4)); // ~1

// Constants
console.log("\n=== Math Constants ===");
console.log("PI:", Math.PI); // 3.141592653589793
console.log("E:", Math.E); // 2.718281828459045

// Practical Examples
console.log("\n=== Practical Examples ===");

// 1. Random number in range
const getRandomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log("Random 10-20:", getRandomBetween(10, 20));

// 2. Calculate discount
const calculateDiscount = (price, percentage) => {
  return price - (price * Math.abs(percentage)) / 100;
};
console.log("20% off $100:", calculateDiscount(100, 20)); // 80

// 3. Round to nearest multiple
const roundToNearest = (number, multiple) => {
  return Math.round(number / multiple) * multiple;
};
console.log("Round 47 to nearest 5:", roundToNearest(47, 5)); // 45

// 4. Format currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
console.log("Format currency:", formatCurrency(1234.567)); // $1,234.57
