function stageCallback(name, cb) {
  setTimeout(() => {
    console.log("Stage:", name);
    cb();
  }, 1000);
}

function runPipelineCallbacks() {
  stageCallback("design", () => {
    stageCallback("build", () => {
      stageCallback("test", () => {
        stageCallback("deploy", () => {
          stageCallback("celebrate", () => {
            console.log("Pipeline (callbacks) finished");
          });
        });
      });
    });
  });
}

function stagePromise(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Stage:", name);
      resolve();
    }, 1000);
  });
}

async function runPipelineAsync() {
  try {
    await stagePromise("design");
    await stagePromise("build");
    await stagePromise("test");
    await stagePromise("deploy");
    await stagePromise("celebrate");
    console.log("Pipeline (async/await) finished");
  } catch (err) {
    console.error(err.message);
  }
}

runPipelineCallbacks();
setTimeout(runPipelineAsync, 6000);