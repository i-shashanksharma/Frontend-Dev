"use strict";
class CalculatorError extends Error {}
class DivideByZeroError extends CalculatorError {}
class NegativeRootError extends CalculatorError {}
class InvalidOperationError extends CalculatorError {}
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function smartCalculate(op, a, b) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "divide": if (b === 0) throw new DivideByZeroError("Divide by zero"); return a / b;
    case "power": return Math.pow(a, b);
    case "root": if (a < 0) throw new NegativeRootError("Negative root"); if (b === 0) throw new InvalidOperationError("Invalid root"); return Math.pow(a, 1 / b);
    default: throw new InvalidOperationError("Invalid operation");
  }
}

for (const op of operations) {
  try {
    console.log(op, smartCalculate(op, num1, num2));
  } catch (err) {
    console.log(op, err.name);
  }
}