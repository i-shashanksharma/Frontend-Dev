"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];
const detailedReport = [];

for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];
  const asString = String(raw);
  const asBoolean = Boolean(raw && raw !== "false");
  const asNumber = Number(raw);

  const isNumberValid = typeof asNumber === "number" && !Number.isNaN(asNumber) && asString.trim() !== "";

  if (isNumberValid) validNumbers.push(asNumber);
  else invalidNumbers.push({ index: i, raw });

  detailedReport.push({
    index: i,
    raw,
    asString,
    asBoolean,
    asNumber: Number.isNaN(asNumber) ? "NaN" : asNumber,
    isNumberValid
  });
}

console.log("=== Detailed Report ===");
for (const row of detailedReport) {
  console.log(`Index ${row.index} | raw: ${JSON.stringify(row.raw)} | String: "${row.asString}" | Boolean: ${row.asBoolean} | Number: ${row.asNumber} | validNumber: ${row.isNumberValid}`);
}

console.log("Valid numeric data:", validNumbers);
console.log("Invalid numeric data:", invalidNumbers);