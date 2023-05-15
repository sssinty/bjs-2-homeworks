
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
  if(this.reason === undefined) {
    this.subject = subjectName
  }
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks != undefined && this.reason === undefined) {
    this.marks.push(...marks)
  }
}

Student.prototype.getAverage = function (...marks) {
  if(this.marks === undefined || this.marks.length === 0 || this.reason != undefined) {
    return 0;
  }else {
    let sum = this.marks.reduce((acc, number) => acc + number, 0);
    let arrLength = this.marks.length;
    return sum / arrLength;
  }
    
}

Student.prototype.exclude = function (reason) {
  this.reason = reason;
  if(this.reason != undefined) {
    delete this.marks
    delete this.subject
  }
}

// let student = new Student("Василиса", "женский", 19);
// student.setSubject("Algebra");
// console.log(student.getAverage()); // 0
// student.addMarks(5, 4, 5);
// student.addMarks(5, 4, 5);
// console.log(student.getAverage()); // 4.5
// console.log(student);
// console.log(student.marks);

// let student = new Student("Артём", "мужской", 25);
// student.exclude('прогулы');
// student.setSubject("Geometry");
// student.addMarks(4, 5, 4, 5);
// console.log(student.getAverage())
// console.log(student.subject);
// console.log(student.marks);
// console.log(student);