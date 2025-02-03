// Object literals
const user = {
  name: "John",
  age: 30,
  location: "New York",
  email: "john@example.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Accessing object properties
console.log(user.name); // Using dot notation
console.log(user["email"]); // Using bracket notation

// Adding new properties
user.gender = "Male";
user["phoneNumber"] = "123-456-7890";

// Object methods
const student = {
  name: "Alice",
  age: 20,
  greeting: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

student.greeting(); // Outputs: Hello, my name is Alice

// Object constructor 
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi from ${this.name}`);
  };
};

const newUser = new User("Bob", 25);
newUser.sayHi(); // Outputs: Hi from Bob


//*************************************************** */
// Object Destructuring in JavaScript

// Basic object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  address: {
      street: "123 Main St",
      city: "Boston",
      country: "USA"
  },
  hobbies: ["reading", "music", "sports"]
};

// 1. Basic Destructuring
console.log("\n=== Basic Destructuring ===");
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age);  // John Doe 30

// 2. Assigning to Different Variable Names
console.log("\n=== Different Variable Names ===");
const { firstName: fName, lastName: lName } = person;
console.log(fName, lName);  // John Doe

// 3. Default Values
console.log("\n=== Default Values ===");
const { phone = "Not Available", email } = person;
console.log(phone, email);  // Not Available john@example.com

// 4. Nested Object Destructuring
console.log("\n=== Nested Destructuring ===");
const { address: { city, country } } = person;
console.log(city, country);  // Boston USA

// 5. Rest Operator in Destructuring
console.log("\n=== Rest Operator ===");
const { firstName: name, ...rest } = person;
console.log(name, rest);  // John {lastName: "Doe", age: 30, ...}

// 6. Combining with Array Destructuring
console.log("\n=== Array Destructuring ===");
const { hobbies: [firstHobby, ...otherHobbies] } = person;
console.log(firstHobby, otherHobbies);  // reading ["music", "sports"]

// 7. Function Parameter Destructuring
console.log("\n=== Function Parameter Destructuring ===");
function printUserInfo({ firstName, lastName, age = 25 }) {
  console.log(`${firstName} ${lastName} is ${age} years old`);
}
printUserInfo(person);  // John Doe is 30 years old

// 8. Nested Function Parameter Destructuring
console.log("\n=== Nested Function Parameters ===");
function getUserLocation({ address: { city, country } }) {
  console.log(`Location: ${city}, ${country}`);
}
getUserLocation(person);  // Location: Boston, USA

// 9. Dynamic Property Names
console.log("\n=== Dynamic Properties ===");
const propertyName = "firstName";
const { [propertyName]: dynamicValue } = person;
console.log(dynamicValue);  // John

// 10. Practical Examples
console.log("\n=== Practical Examples ===");

// API Response Handling
const apiResponse = {
  status: 200,
  data: {
      user: {
          id: 1,
          name: "John Doe",
          settings: {
              theme: "dark",
              notifications: true
          }
      }
  }
};

const { 
  status,
  data: { 
      user: { 
          settings: { theme }
      }
  }
} = apiResponse;

console.log("Theme Setting:", theme);  // dark

// Configuration Object
const config = {
  server: {
      port: 3000,
      host: "localhost"
  },
  database: {
      url: "mongodb://localhost",
      name: "mydb"
  }
};

function connectDatabase({ 
  database: { url, name },
  server: { port }
}) {
  console.log(`Connecting to ${name} at ${url} on port ${port}`);
}

connectDatabase(config);  // Connecting to mydb at mongodb://localhost on port 3000