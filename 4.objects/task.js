
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
  if(this.reason === undefined) {
    this.subject = subjectName;
  }
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks != undefined && this.exclude != undefined) {
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
