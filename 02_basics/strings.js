// String Methods in JavaScript

// String creation
const name = "John Doe";
const email = "john@example.com";
const description = `User ${name}'s email is ${email}`; // Template literal

console.log("\n=== Basic String Properties ===");
console.log("Length:", name.length); // 8
console.log("Type:", typeof name); // string

// Case methods
console.log("\n=== Case Methods ===");
console.log("Uppercase:", name.toUpperCase()); // JOHN DOE
console.log("Lowercase:", name.toLowerCase()); // john doe

// Finding and Extracting
console.log("\n=== Finding Methods ===");
console.log("Index of 'o':", name.indexOf("o")); // 1
console.log("Last index of 'o':", name.lastIndexOf("o")); // 6
console.log("Includes 'Doe':", name.includes("Doe")); // true
console.log("Starts with 'J':", name.startsWith("J")); // true
console.log("Ends with 'e':", name.endsWith("e")); // true

// Extracting Substrings
console.log("\n=== Extraction Methods ===");
console.log("Slice(0,4):", name.slice(0, 4)); // John
console.log("Substring(0,4):", name.substring(0, 4)); // John
console.log("Substr(5,3):", name.substr(5, 3)); // Doe

// Trimming
const paddedText = "   Hello World   ";
console.log("\n=== Trimming Methods ===");
console.log("Trim:", paddedText.trim()); // "Hello World"
console.log("TrimStart:", paddedText.trimStart()); // "Hello World   "
console.log("TrimEnd:", paddedText.trimEnd()); // "   Hello World"

// Replacement
console.log("\n=== Replacement Methods ===");
console.log("Replace:", name.replace("John", "Jane")); // Jane Doe
console.log("ReplaceAll:", "hello hello".replaceAll("hello", "hi")); // hi hi

// Split and Join
console.log("\n=== Split and Join ===");
const words = name.split(" "); // ['John', 'Doe']
console.log("Split:", words);
console.log("Join:", words.join("-")); // John-Doe

// Character Access
console.log("\n=== Character Access ===");
console.log("charAt(0):", name.charAt(0)); // J
console.log("charCodeAt(0):", name.charCodeAt(0)); // 74 (ASCII value)

// Padding
console.log("\n=== Padding Methods ===");
const number = "42";
console.log("PadStart:", number.padStart(5, "0")); // 00042
console.log("PadEnd:", number.padEnd(5, "0")); // 42000

// Search with Regular Expression
console.log("\n=== RegExp Search ===");
console.log("Match:", name.match(/[A-Z]/g)); // ['J', 'D']
console.log("Search:", name.search(/Doe/)); // 5

// Practical Examples
console.log("\n=== Practical Examples ===");

// 1. Email validation
const isValidEmail = (email) => {
  return email.includes("@") && email.includes(".");
};
console.log("Valid email:", isValidEmail(email)); // true

// 2. Name formatting
const formatName = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
console.log("Formatted name:", formatName("jOHN dOE")); // John Doe

// 3. Password masking
const maskPassword = (password) => {
  return "*".repeat(password.length);
};
console.log("Masked password:", maskPassword("secret123")); // *********

// 4. URL slug creation
const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};
console.log("Slug:", createSlug("Hello World!")); // hello-world
