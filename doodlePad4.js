var maxSequence = function(arr){
  let arrayStart = 0;
  let maxTotal = 0;
  for (let i=arrayStart; i<arr.length - arrayStart; i++){
    let tempArray = arr.slice(arrayStart)
    if (subArrTotal(tempArray) > maxTotal) maxTotal = subArrTotal(tempArray);
    arrayStart++;
  }
  return maxTotal;
}

const subArrTotal = function(arr){
  let subTotal = 0;
  for (let i=0; i<arr.length; i++) {
    subTotal += arr[i];
  } 
  return subTotal;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log('Expected: 6')