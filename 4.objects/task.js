
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
    if(marks != undefined) {
    this.marks = marks
    // marks.push(marks);
  }
}

Student.prototype.getAverage = function (...marks) {
  if(student1.marks === undefined || student1.marks.length === 0) {
    return 0;
  }else{
    let sum = student1.marks.reduce((acc, number) => acc + number, 0);
    let arrLength = student1.marks.length;
    return sum / arrLength;
  }
    
}

Student.prototype.exclude = function (reason) {
  this.reason = reason;
  delete this.marks
  delete this.subject

}

// let student1 = new Student("Василиса", "женский", 19);
// student1.setSubject("Algebra");
// console.log(student1.getAverage()); // 0
// student1.addMarks(4, 5, 4, 5);
// console.log(student1.getAverage()); // 4.5
// console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)

