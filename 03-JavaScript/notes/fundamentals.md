# JavaScript Fundamentals

## What is JavaScript?
JavaScript is a programming language that makes web pages interactive and dynamic.

## Basic Syntax
```javascript
// Variables
let name = "John";
const age = 25;
var city = "New York";

// Functions
function greetUser(name) {
    return `Hello, ${name}!`;
}

// Objects
const person = {
    name: "John",
    age: 25,
    city: "New York"
};

// Arrays
const colors = ["red", "green", "blue"];
```

## Data Types
- **String** - Text data: `"Hello World"`
- **Number** - Numeric data: `42`, `3.14`
- **Boolean** - True/false: `true`, `false`
- **Array** - List of items: `[1, 2, 3]`
- **Object** - Key-value pairs: `{name: "John"}`
- **Undefined** - No value assigned
- **Null** - Intentionally empty value

## Control Structures
```javascript
// If statement
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

## DOM Manipulation
```javascript
// Select elements
const element = document.getElementById("myId");
const elements = document.querySelectorAll(".myClass");

// Modify content
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Add event listeners
element.addEventListener("click", function() {
    alert("Button clicked!");
});
```

## Notes Template
Format for JavaScript notes:
1. **Concept** - What it is and why it's important
2. **Syntax** - How to write it
3. **Example** - Working code sample
4. **Common Use Cases** - When to use it
5. **Best Practices** - Tips for clean code