const a = Math.floor(Math.random() * 20) + 1;
const b = Math.floor(Math.random() * 20) + 1;

const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (operator) {
  case "+":
    correctAnswer = a + b;
    break;
  case "-":
    correctAnswer = a - b;
    break;
  case "*":
    correctAnswer = a * b;
    break;
  case "/":
    correctAnswer = (a / b).toFixed(2);
    break;
}

console.log(`Question: What is ${a} ${operator} ${b}?`);
console.log(`Correct answer: ${correctAnswer}`);
