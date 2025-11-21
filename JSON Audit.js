"use strict";
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];
for (let i = 0; i < rawData.length; i++) {
  try {
    const parsed = JSON.parse(rawData[i]);
    if (!("user" in parsed) || !("age" in parsed)) throw new Error("Missing keys");
    const ageNum = Number(parsed.age);
    if (Number.isNaN(ageNum)) throw new Error("Invalid age");
    parsed.age = ageNum;
    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i + 1, raw: rawData[i], error: err.message });
  }
}

console.log("Valid:", clean);
console.log("Errors:", errors);
console.log("Under 18:", clean.filter(u => u.age < 18));