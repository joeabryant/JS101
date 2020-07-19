/*
1. Introduce calculator
2. Ask user for loan amount
4. Convert APR to MPR
5. Ask user for loan duration
6. Calculate Monthly interest rate
7. Calculate Loan duration (months)
8. Print to user
Formula: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
*/

//Global variables
const readline = require('readline-sync');
let monthlyRate = 0.10;

//Gather information
prompt('How much would you like a loan for? (in dollars)');
let loanAmount = Number(readline.question());
console.log(loanAmount);

prompt('How long would you like your loan for? (in months)');
let loanLength = Number(readline.question());
console.log(loanLength);

console.log(`Your monthly payment is ${calculateInterest(monthlyRate, loanAmount, loanLength)}`);

function calculateInterest(monthlyRate, loanAmount, loanLength) {
  let monthlyPay = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanLength))));
  return monthlyPay;
}

//Function to print prompt
function prompt(message) {
  console.log(`=> ${message}`);
};