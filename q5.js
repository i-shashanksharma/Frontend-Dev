function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log(this.name);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(this.branch);
};
const stu = new Student("Aman", "CSE");
stu.showName();
stu.showBranch();