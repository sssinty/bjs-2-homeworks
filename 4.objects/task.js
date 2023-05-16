
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
  if(student.hasOwnProperty('exclude') === false) {
    this.subject = subjectName; 
  }
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks != undefined || student.hasOwnProperty('exclude') === false) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function (...marks) {
  if(this.marks === undefined || this.marks.length === 0 || student.hasOwnProperty('exclude') === true) {
    return 0;
  }else {
    let sum = this.marks.reduce((acc, number) => acc + number, 0);
    let arrLength = this.marks.length;
    return sum / arrLength;
  }
    
}

Student.prototype.exclude = function (reason) {
  this.exclude = reason;
  if(student.hasOwnProperty('exclude') === true) {
    delete this.marks;
    delete this.subject;
  }
}

// let student = new Student("Василиса", "женский", 19);
// student.setSubject("Algebra");
// console.log(student.getAverage()); // 0
// student.addMarks(4, 5, 4, 5);
// console.log(student.getAverage()); // 4.5
// console.log(student);
// console.log(student);
// console.log(student.marks);

// let student = new Student("Артём", "мужской", 25);
// student.exclude('плохая учёба')
// student.addMarks(4, 5, 4, 5);
// console.log(student.getAverage()); // 0
// console.log(student.marks);
// student.setSubject("Geometry");
// console.log(student);

