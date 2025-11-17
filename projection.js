let currentSalary = 50000;
const annualIncrementRate = 7;

const projection = [];

for (let year = 1; year <= 5; year++) {
  currentSalary = currentSalary + (currentSalary * annualIncrementRate) / 100;
  const roundedSalary = Math.round(currentSalary);
  projection.push({ Year: `Year ${year}`, Salary: roundedSalary });
}

console.table(projection);
