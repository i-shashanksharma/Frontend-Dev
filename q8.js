function submitOrder(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve("Order success") : reject(new Error("Failure"));
    }, 800);
  });
}

async function processOrder(order) {
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await submitOrder(order);
      console.log("Attempt", i, "Success");
      return res;
    } catch (err) {
      console.log("Attempt", i, "Failed");
      if (i === 3) throw new Error("Order could not be processed");
    }
  }
}

(async () => {
  try {
    await processOrder({ id: 1 });
  } catch (err) {
    console.error(err.message);
  }
})();