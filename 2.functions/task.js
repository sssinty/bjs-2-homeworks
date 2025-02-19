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

function summElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  return arr.reduce((a, b) => a + b);
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if(arr.length === 0) {
    return 0;
  }
  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    }else {
      sumEvenElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if(arr.length === 0) {
    return 0;
  }
  for(let i = 0; i < arr.length; i++) { 
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return sumEvenElement / countEvenElement
}

function makeWork (arrOfArr, func,) {
  let maxWorkerResult = -Infinity;
  let resultFunction 
  for(let i = 0; i < arrOfArr.length; i++) {
   resultFunction = func(...arrOfArr[i]);
    if(resultFunction > maxWorkerResult) {
      maxWorkerResult = resultFunction;
    }
  }
  return maxWorkerResult;
}

