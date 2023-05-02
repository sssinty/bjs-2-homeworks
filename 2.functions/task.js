function getArrayParams(...arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  avg = sum / arr.length;
  return { min: min, max: max, avg: +avg.toFixed(2) };
}
console.log( getArrayParams(1, 2, 3, -100, 10))

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
