#!/usr/bin/env node
// src/calculator.js
// Node.js CLI calculator
// Supported operations:
// - addition (add, +)
// - subtraction (sub, -)
// - multiplication (mul, *)
// - division (div, /)

const [,, op, ...args] = process.argv;

const usage = `Usage: node src/calculator.js <operation> <num1> <num2>\n\nOperations:\n  add | +      Addition\n  sub | -      Subtraction\n  mul | *      Multiplication\n  div | /      Division\n\nExamples:\n  node src/calculator.js add 2 3\n  node src/calculator.js / 10 2`;

if (!op || args.length < 2) {
  console.error(usage);
  process.exit(1);
}

const a = Number(args[0]);
const b = Number(args[1]);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Invalid number input.');
  console.error(usage);
  process.exit(2);
}

let result;
switch (op) {
  case 'add':
  case '+':
    // addition
    result = a + b;
    break;
  case 'sub':
  case '-':
    // subtraction
    result = a - b;
    break;
  case 'mul':
  case '*':
    // multiplication
    result = a * b;
    break;
  case 'div':
  case '/':
    // division
    if (b === 0) {
      console.error('Error: Division by zero');
      process.exit(3);
    }
    result = a / b;
    break;
  default:
    console.error('Unknown operation.');
    console.error(usage);
    process.exit(1);
}

console.log(result);
process.exit(0);
