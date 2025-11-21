function applyOperation(numbers, operation) {
  const result = numbers.map(operation);
  console.log(result);
}

applyOperation([1, 2, 3, 4], num => num * 2);
applyOperation([1, 2, 3, 4], num => num * num);