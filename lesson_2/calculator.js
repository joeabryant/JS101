/*
1. Ask the user for the first number.
2. Ask the user for the second number.
3. Ask the user for an operation to perform.
4. Perform the operation on the two numbers.
5. Print the results to the terminal.
*/

//Bring in readline-sync
const readline = require('readline-sync');

console.log('Welcome to the Calculator App!');
console.log('Pick a number!');
let num1 = Number(readline.question());
// console.log(num1);
console.log('Pick another number!');
let num2 = Number(readline.question());
console.log('Would you like to add, subtract, multiply, or divide?');
let operation = readline.question();
console.log(`${num1} ${num2} ${operation}`);

function calculator(num1, num2, operation) {
  switch (operation) {
    case 'add':
      return num1 + num2;
      break;
    case 'subtract':
      return num1 - num2;
      break;
    case 'multiply':
      return num1 * num2;
      break;
    case 'divide':
      return num1 / num2;
      break;
    default:

  }
}

console.log(calculator(num1, num2, operation));