function findOutlier(integers){
  let countEvenOrOdd = {even: 0, odd: 0};
  for (let i=0; i<3; i++){
    (integers[i] % 2 === 0) 
      ? countEvenOrOdd.even += 1 
      : countEvenOrOdd.odd += 1;
  }
  
  let evenOrOddValue = Math.min(countEvenOrOdd.even, countEvenOrOdd.odd)
  let whatToFind = Object.keys(countEvenOrOdd).find(key => countEvenOrOdd[key] === evenOrOddValue);
  return (whatToFind === 'even') 
    ? integers.find(num => num % 2 === 0) 
    : integers.find(num => num % 2 != 0)
}