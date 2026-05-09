#!/usr/bin/env node
// src/calculator.js
// Node.js CLI calculator
// Supported operations:
// - addition (add, +)
// - subtraction (sub, -)
// - multiplication (mul, *)
// - division (div, /)

// Exported pure functions for testing and reuse
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

module.exports = { add, sub, mul, div };

// CLI wrapper
if (require.main === module) {
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
  try {
    switch (op) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'sub':
      case '-':
        result = sub(a, b);
        break;
      case 'mul':
      case '*':
        result = mul(a, b);
        break;
      case 'div':
      case '/':
        result = div(a, b);
        break;
      default:
        console.error('Unknown operation.');
        console.error(usage);
        process.exit(1);
    }

    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(3);
  }
}
