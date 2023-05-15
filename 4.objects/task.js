
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
  if(this.exclude === undefined) {
    this.subject = subjectName;
  }
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks != undefined || this.exclude === undefined) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function (...marks) {
  if(this.marks === undefined || this.marks.length === 0 || this.exclude === undefined) {
    return 0;
  }else {
    let sum = this.marks.reduce((acc, number) => acc + number, 0);
    let arrLength = this.marks.length;
    return sum / arrLength;
  }
    
}

Student.prototype.exclude = function (reason) {
  this.exclude = reason;
  if(this.exclude != undefined) {
    delete this.marks;
    delete this.subject;
  }
}
// let student = new Student("Василиса", "женский", 19);
// student.exclude('прогулы');
// student.setSubject("Algebra");
// console.log(student.getAverage()); // 0
// student.addMarks(5, 4, 5);
// console.log(student.getAverage()); // 4.5

// console.log(student);
// console.log(student.marks);

// let student = new Student("Артём", "мужской", 25);
// student.addMarks(4, 5, 4, 5);
// student.exclude('прогулы');
// student.addMarks(4, 5, 4, 5);
// console.log(student.getAverage())
// student.addMarks(4, 5, 4, 5);
// console.log(student.subject);
// console.log(student.marks);
// console.log(student);
