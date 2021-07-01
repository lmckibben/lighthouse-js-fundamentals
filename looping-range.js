const range = function(start, end, step){
  const rangeOutput = [];
  for (let i = start; i <= end; i = i + step){
    if (start === undefined || end === undefined || step === undefined){
      return rangeOutput
    }else if(start >= end){
      return rangeOutput
    }else if(step <= 0){
      return rangeOutput
    }else{
      rangeOutput.push(i);
    }
  }
  return rangeOutput
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
