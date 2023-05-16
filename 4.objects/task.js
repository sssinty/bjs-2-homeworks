
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName; 
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks != undefined || this.hasOwnProperty('excluded') === false) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function (...marks) {
  if(this.marks === undefined || this.marks.length === 0 || this.hasOwnProperty('excluded') === true) {
    return 0;
  }
  let sum = this.marks.reduce((acc, number) => acc + number, 0);
  let arrLength = this.marks.length;
  return sum / arrLength; 
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}




