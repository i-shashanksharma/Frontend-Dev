const expenses = {
  food: 6000,
  travel: 1200,
  rent: 8000,
  bills: 1500,
  leisure: 2000
};

const values = Object.values(expenses);
const total = values.reduce((sum, val) => sum + val, 0);
const average = total / values.length;
const finalAmount = total * 1.1;

console.log(`Total: ₹${total.toFixed(2)}`);
console.log(`Average: ₹${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${finalAmount.toFixed(2)}`);
