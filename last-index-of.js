const lastIndexOf = function (array, value){
  let output = -1
  for (let i = array.length - 1; i >= 0; i--){
    if (array[i] === value){
      output = i;
      break
    }
    
  }
  return output
}

//console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
//console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
//console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
//console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
//console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([5,5,5,5,0],5));