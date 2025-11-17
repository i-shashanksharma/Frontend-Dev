const originalTotal = 7425;

let discountPercent = 0;
if (originalTotal >= 10000) {
  discountPercent = 25;
} else if (originalTotal >= 5000) {
  discountPercent = 15;
} else if (originalTotal >= 2000) {
  discountPercent = 5;
}

const discountAmount = (originalTotal * discountPercent) / 100;
const finalPrice = Math.round(originalTotal - discountAmount);

console.log(`Original Total: ₹${originalTotal}`);
console.log(`Discount Percentage: ${discountPercent}%`);
console.log(`Final Price after discount: ₹${finalPrice}`);
