function delay() {
  return 1000 + Math.floor(Math.random() * 1000);
}

function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.15 ? reject(new Error(name + " failed")) : resolve();
    }, delay());
  });
}

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    console.log("Step 1: Order taken");
    await step("order");

    console.log("Step 2: Food prepared");
    await step("prepare");

    console.log("Step 3: Package ready");
    await step("pack");

    console.log("Step 4: Out for delivery");
    await step("dispatch");

    await step("deliver");
    console.log("Delivery completed!");
  } catch (err) {
    console.log("Pipeline failed!");
  }
}

runPipeline();