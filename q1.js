function sleepRandom() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Boiler malfunction"));
      else resolve("hot water");
    }, sleepRandom());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Grounds missing"));
      else resolve("fresh coffee");
    }, sleepRandom());
  });
}

function pourCoffee(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Cup cracked"));
      else resolve("Coffee ready for the team!");
    }, sleepRandom());
  });
}

boilWater()
  .then(brewCoffee)
  .then(pourCoffee)
  .then(console.log)
  .catch(err => console.error("Coffee process failed:", err.message));