/* JavaScript Behind the Scenes
1. JavaScript Engine
JavaScript code is executed by a JavaScript engine (like V8 in Chrome)
The engine consists of two main components:
Memory Heap (for memory allocation)
Call Stack (for code execution)
2. Execution Context
When JavaScript runs your code, it creates an execution context in two phases:
Creation Phase:
Creates the Global Execution Context (for global code)
Creates this binding
Sets up Memory Heap:
Variable declarations (hoisted with undefined)
Function declarations (fully hoisted)
Execution Phase:
Runs the code line by line
Creates new execution contexts for each function call
Let's modify your code to demonstrate these concepts:
*/

// Function Declaration - fully hoisted
function sayHello(name) {
    return `Hello ${name}!`;
  }
  
  // Function Expression - not hoisted
  const addNumbers = function (num1, num2) {
    console.log("Execution context of addNumbers");
    return num1 + num2;
  };
  
  // Example of hoisting
  console.log(sayHello("John")); // Works fine
  // console.log(addNumbers(5, 3)); // Would error if called before declaration
  
  // Demonstrating scope chain
  const globalVariable = "I'm global";
  
  function outerFunction() {
    const outerVariable = "I'm from outer";
    
    function innerFunction() {
      const innerVariable = "I'm from inner";
      console.log(innerVariable); // Has access to its own scope
      console.log(outerVariable); // Has access to outer scope
      console.log(globalVariable); // Has access to global scope
    }
    
    innerFunction();
  }
  
  // Demonstrating closure
  function createCounter() {
    let count = 0;  // This variable is "enclosed" in the returned function
    
    return function() {
      return ++count;
    }
  }
  
  const counter = createCounter();

  /* Key Concepts
Hoisting
Function declarations are hoisted completely
Variable declarations are hoisted but not their assignments
Function expressions are not hoisted
Scope Chain
Every execution context has a reference to its outer environment
Creates a scope chain: Local Scope → Outer Scope → Global Scope
Closures
Functions remember their lexical scope even when executed elsewhere
Inner functions have access to variables in their outer scope
Enables data privacy and state preservation
Call Stack
Global execution context is created and pushed to the stack
When a function is called, a new execution context is created and pushed
When function completes, its context is popped off the stack
Process continues until stack is empty
Event Loop
Handles asynchronous operations
Consists of:
Call Stack
Callback Queue
Microtask Queue
Event Loop
Web APIs (in browsers)
*/
console.log('1'); // Goes directly to call stack

setTimeout(() => {
  console.log('2'); // Goes to Web API → Callback Queue → Call Stack
}, 0);

Promise.resolve().then(() => {
  console.log('3'); // Goes to Microtask Queue → Call Stack
});

console.log('4');

// Output will be: 1, 4, 3, 2