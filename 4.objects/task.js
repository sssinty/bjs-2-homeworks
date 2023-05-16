
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
  if(this.hasOwnProperty('excluded') === false) {
    this.subject = subjectName; 
  }
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks != undefined || this.hasOwnProperty('excluded') === false) {
    this.marks.push(...marks);
  }else{
    return undefined;
  }
}

Student.prototype.getAverage = function (...marks) {
  if(this.marks === undefined || this.marks.length === 0 || this.hasOwnProperty('excluded') === true) {
    return 0;
  }else {
    let sum = this.marks.reduce((acc, number) => acc + number, 0);
    let arrLength = this.marks.length;
    return sum / arrLength;
    
  }
    
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}

// let student = new Student("Василиса", "женский", 19);
// student.setSubject("Algebra");
// console.log(student.getAverage()); // 0
// student.addMarks(3, 4, 5);
// console.log(student.getAverage()); // 4.5
// console.log(student);
// console.log(student.marks);

let student = new Student("Артём", "мужской", 25);
student.setSubject("Algebra");
student.exclude('прогулы')
student.addMarks(3, 4, 5);
console.log(student);
console.log(student.marks);
console.log(student.subject);


