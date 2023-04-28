"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - (4 * a * c);
  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant) )/(2 * a), (-b - Math.sqrt(discriminant) ) / (2 * a));
  }else if (discriminant == 0) {
    arr.push(-b / (2 * a));
  }else if (discriminant < 0) {
    return arr;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(!isNaN(percent) === false || !isNaN(contribution) === false || !isNaN(amount) === false || !isNaN(countMonths) === false  ) {
    return false;
  }else {
    percent = +percent;
    contribution = +contribution;
    amount = +amount;
    countMonths = +countMonths;
  }
  let convertedProcent = (percent / 100) / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = countMonths * (loanBody * (convertedProcent + (convertedProcent / (Math.pow((1 + convertedProcent), countMonths) - 1))));
  return +monthlyPayment.toFixed(2);
}

