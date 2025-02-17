# Object-Oriented Programming in JavaScript

## What is OOP?

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" which can contain data (properties) and code (methods). It's used to structure code in a way that combines data and functionality.

## Core Principles of OOP

### 1. Objects and Classes

#### Objects

- Basic building blocks in JavaScript
- Collection of properties and methods
- Each property is a key-value pair
- Methods are functions attached to objects

#### Classes

- Templates/blueprints for creating objects
- Introduced in ES6
- Use `constructor` method to initialize properties

### 2. Four Pillars of OOP

#### 2.1 Encapsulation

- Bundling data and methods that operate on that data within a single unit
- Hiding internal details and providing an interface
- Achieved using private fields (#) and closures

#### 2.2 Inheritance

- Allows classes to inherit properties and methods from other classes
- Creates a parent-child relationship between classes
- Promotes code reuse

#### 2.3 Polymorphism

- Ability of objects to take multiple forms
- Same interface, different implementations
- Method overriding

#### 2.4 Abstraction

- Hiding complex implementation details
- Showing only necessary features
- Can be achieved using abstract classes (though JavaScript doesn't have built-in support)

## Advanced OOP Concepts

### Static Members

- Belong to class itself, not instances
- Accessed using class name

### Getters and Setters

- Special methods for accessing and modifying properties
- Provide additional control over property access

## Best Practices

1. **Class Organization**

   - One class per file
   - Clear and meaningful class names
   - Follow Single Responsibility Principle

2. **Encapsulation**

   - Use private fields when possible
   - Provide public methods for accessing private data
   - Validate data in setters

3. **Inheritance**

   - Keep inheritance hierarchies shallow
   - Favor composition over inheritance
   - Use `super()` in child class constructors

4. **Code Style**

   - Use PascalCase for class names
   - Use camelCase for method and property names
   - Document classes and methods with comments

5. **Error Handling**
   - Implement proper error checking
   - Throw specific errors
   - Handle inheritance-related errors

## Common Design Patterns

### 1. Singleton Pattern
