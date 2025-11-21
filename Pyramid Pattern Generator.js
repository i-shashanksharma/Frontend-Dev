"use strict";

function generatePyramid(rows = 5) {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) row += "* ";
    console.log(row.trim());
  }
}
generatePyramid(4);

function generatePyramidWithVar(rows = 5) {
  for (var i = 1; i <= rows; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) row += "* ";
    console.log(row.trim());
  }
  console.log(i, j);
}
generatePyramidWithVar(4);