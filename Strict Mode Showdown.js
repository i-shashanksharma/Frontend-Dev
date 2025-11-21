(function nonStrictLike() {
  const fn = new Function(`
    function demo(a, a) {
      globalThis.total = 10;
      delete globalThis.total;
      console.log("non-strict-like total =", globalThis.total);
    }
    demo(5, 10);
  `);
  fn();
})();

(function strictDemo() {
  "use strict";
  function demoStrict(a, b) {
    try { total = 10; } catch (err) { console.log("strict:", err.name); }
  }
  demoStrict(5, 10);
})();

(function correctVersion() {
  "use strict";
  function demoCorrect(a, b) {
    let total = 10;
    console.log("correct:", total);
  }
  demoCorrect(5, 10);
})();