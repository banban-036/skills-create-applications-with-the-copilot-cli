#!/usr/bin/env node
// src/calculator.js
// Node.js CLI calculator
// Supported operations:
// - addition (add, +)
// - subtraction (sub, -)
// - multiplication (mul, *)
// - division (div, /)
// - modulo (mod, %)
// - exponentiation (pow, ^)
// - square root (sqrt)

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

function mod(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, sub, mul, div, mod, power, squareRoot };

// CLI wrapper
if (require.main === module) {
  const [,, op, ...args] = process.argv;

  const usage = `Usage: node src/calculator.js <operation> <num1> <num2?>\n\nOperations:\n  add | +        Addition\n  sub | -        Subtraction\n  mul | *        Multiplication\n  div | /        Division\n  mod | %        Modulo (remainder)\n  pow | ^        Exponentiation (base exponent)\n  sqrt           Square root (single argument)\n\nExamples:\n  node src/calculator.js add 2 3\n  node src/calculator.js mod 10 3\n  node src/calculator.js pow 2 8\n  node src/calculator.js sqrt 16`;

  if (!op || args.length < 1) {
    console.error(usage);
    process.exit(1);
  }

  // parse numbers
  const numArgs = args.map(Number);
  if (numArgs.some(Number.isNaN)) {
    console.error('Invalid number input.');
    console.error(usage);
    process.exit(2);
  }

  try {
    let result;
    switch (op) {
      case 'add':
      case '+':
        if (numArgs.length < 2) throw new Error('Two operands required');
        result = add(numArgs[0], numArgs[1]);
        break;
      case 'sub':
      case '-':
        if (numArgs.length < 2) throw new Error('Two operands required');
        result = sub(numArgs[0], numArgs[1]);
        break;
      case 'mul':
      case '*':
        if (numArgs.length < 2) throw new Error('Two operands required');
        result = mul(numArgs[0], numArgs[1]);
        break;
      case 'div':
      case '/':
        if (numArgs.length < 2) throw new Error('Two operands required');
        result = div(numArgs[0], numArgs[1]);
        break;
      case 'mod':
      case '%':
        if (numArgs.length < 2) throw new Error('Two operands required');
        result = mod(numArgs[0], numArgs[1]);
        break;
      case 'pow':
      case '^':
      case '**':
        if (numArgs.length < 2) throw new Error('Two operands required');
        result = power(numArgs[0], numArgs[1]);
        break;
      case 'sqrt':
        // sqrt accepts a single argument
        result = squareRoot(numArgs[0]);
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
