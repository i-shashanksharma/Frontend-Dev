"use strict";
console.log("=== Fixed Sequence ===");

var score = 50;
console.log(score);

function announce() { console.log("Game started"); }
announce();

let status = "ready";
function startGame() { console.log(status); }
startGame();

console.log("=== Arrow Version ===");

const announceArrow = () => console.log("Game started (arrow)");
announceArrow();

const startGameArrow = () => console.log(status);
startGameArrow();