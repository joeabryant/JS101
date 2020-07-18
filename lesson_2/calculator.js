/*
1. Ask the user for the first number.
2. Ask the user for the second number.
3. Ask the user for an operation to perform.
4. Perform the operation on the two numbers.
5. Print the results to the terminal.
*/

//Bring in readline-sync
const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
prompt(MESSAGES['language']);
let language = readline.question();
prompt(MESSAGES[language]['welcome']);
let name = readline.question();


while (true) {
  prompt(MESSAGES[language]['number1']);
  let num1 = Number(readline.question());

  while (invalidNumber(num1)) {
    prompt(MESSAGES[language]['invalidNumber']);
    num1 = Number(readline.question());
  }

  prompt(MESSAGES[language]['number2']);
  let num2 = Number(readline.question());

  while (invalidNumber(num2)) {
    prompt(MESSAGES[language]['invalidNumber']);
    num2 = Number(readline.question());
  }

  prompt(MESSAGES[language]['operation']);
  let operation = readline.question();

  while (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
    prompt(MESSAGES[language]['invalidOperation']);
    operation = readline.question();
  }

  console.log(calculator(num1, num2, operation));

  prompt(MESSAGES[language]['goAgain']);
  let response = readline.question();

  if (response !== 'y') {
    break;
  }
}


//Functions

function invalidNumber(number) {
  return Number.isNaN(Number(number));
};

function prompt(message) {
  console.log(`=> ${message}`);
};

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