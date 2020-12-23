var maxSequence = function(arr){
  let maxTotal = 0;
  for (let i=0; i<arr.length; i++) {
    let tempTotal = sliceTotalMax(arr, i);
    if (tempTotal > maxTotal) maxTotal = tempTotal;
  }
  return maxTotal;
}

const sliceTotalMax = function(arr, sliceLength){
  let sliceTotal = 0;
  for (let i=0; i<arr.length - sliceLength; i++) {
    let tempTotal = arr.slice(i, i + sliceLength).reduce(((a,b) => a+b), 0);
    // console.log(tempTotal)
    if (tempTotal > sliceTotal) sliceTotal = tempTotal;
  } 
  return sliceTotal;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log('Expected: 6')

// console.log('Result: ', sliceTotalMax([-2, 1, -3, 4, -1, 2, 1, -5, 4], 1));