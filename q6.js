class Employee {
  constructor(id, name, dept, salary) {
    this.id = id;
    this.name = name;
    this.department = dept;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(1, "Aman", "IT", 30000),
  new Employee(2, "Riya", "HR", 25000),
  new Employee(3, "John", "Sales", 28000),
  new Employee(4, "Neha", "Marketing", 35000),
  new Employee(5, "Sam", "Finance", 40000),
];

employees.forEach(e => e.applyBonus(10));
employees.forEach(e =>
  console.log(e.name, "Annual Salary:", e.getAnnualSalary())
);

const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log("Total Company Payout:", totalPayout);