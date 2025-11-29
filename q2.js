class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  calculateAverage() {
    const avg = this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }
}

const s1 = new Student("A", [90, 85, 92]);
const s2 = new Student("B", [70, 75, 72]);
const s3 = new Student("C", [40, 55, 50]);

console.log(s1.name, s1.calculateAverage());
console.log(s2.name, s2.calculateAverage());
console.log(s3.name, s3.calculateAverage());