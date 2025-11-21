"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
  try {
    const emp = employees[i];
    const salaryNum = Number(emp.salary);
    const yearsNum = Number(emp.years);
    
    if (Number.isNaN(salaryNum) || Number.isNaN(yearsNum)) throw new Error("Invalid conversion");
    const bonus = yearsNum > 3 ? salaryNum * 0.1 : salaryNum * 0.05;
    console.log(`Employee: ${emp.name} | Salary: ${salaryNum} | Years: ${yearsNum} | Bonus: ${bonus}`);
  } catch (err) {
    console.log("Error:", err.message);
  }
}