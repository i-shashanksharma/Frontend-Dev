const menu = {
  burger: 120,
  pizza: 250,
  pasta: 180,
  fries: 90
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error("Invalid item: " + item);
      return menu[item];
    });
    return prices.reduce((a, b) => a + b, 0);
  } catch (e) {
    return e.message;
  }
}

console.log(calculateBill(["pizza", "burger"]));
console.log(calculateBill(["pizza", "invalid"]));
