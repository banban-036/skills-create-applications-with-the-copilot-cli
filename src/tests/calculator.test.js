const { add, sub, mul, div, mod, power, squareRoot } = require('../calculator');

describe('Calculator basic operations', () => {
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => div(5, 0)).toThrow('Division by zero');
  });

  test('supports floats', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
    expect(div(7, 2)).toBeCloseTo(3.5);
  });

  // New tests for requested functions
  test('10 mod 3 = 1', () => {
    expect(mod(10, 3)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => mod(5, 0)).toThrow('Modulo by zero');
  });

  test('2 pow 8 = 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('power supports negative exponent', () => {
    expect(power(2, -1)).toBeCloseTo(0.5);
  });

  test('sqrt 16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('sqrt negative throws', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of negative number');
  });
});
