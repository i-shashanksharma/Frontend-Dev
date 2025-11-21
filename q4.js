function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Server A failed"));
      else resolve("Server A OK");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Server B failed"));
      else resolve("Server B OK");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(console.log)
  .catch(err => console.error(err.message));

Promise.race([serverA(), serverB()])
  .then(result => console.log("Fastest response:", result))
  .catch(err => console.error(err.message));