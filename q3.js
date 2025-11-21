function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) reject(new Error("Failed to fetch bugs"));
      else resolve(["UI glitch", "API timeout", "Login failure", "Performance issue", "Broken link"]);
    }, 1000);
  });
}

getBugs()
  .then(bugs => console.table(bugs))
  .catch(err => console.error(err.message));