// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// ARROW FAT FUNCTION
// *************************************

// Arrow function is very simple and concise in creating function.

// 1. single line statement in arrow function
let sum = (a, b) => a + b;

console.log(sum(2, 3)); //5;
// // single line statement without curly braces returns the result without 'return' keyword.

// Equivalent function expression of example 1 is -->
let total = function (a, b) {
  return a + b;
};

console.log(total(3, 4)); //7

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
let greeting = (name) => `My name is ${name}.`;

console.log(greeting('John')); //My name is John.

// If there are no arguments, parentheses will be empty (but they should be present)
let age = 19;
let welcome =
  age > 18
    ? () => console.log('You are eligible to vote.')
    : () => console.log('You are under age to vote!');

welcome(); // You are eligible to vote.

// curly braces allows to write multiple statements inside the function and explicit 'return' is needed to return result.

let product = (x, y) => {
  let result = x * y;
  return `The product of ${x} and ${y} is ${result}.`;
};

console.log(product(2, 3)); //6

// Tasks
// ********************************

// Replace Function Expressions with arrow functions in the code below:
let ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the execution.')
);
