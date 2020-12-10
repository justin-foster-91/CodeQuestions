function findOdd(A) {
  let charCount = {};
  A.map(num => {
    if (!charCount[num]) {
      charCount[num] = 1;
    } else {
      charCount[num] = (charCount[num] += 1);
    }
    console.log(charCount);
  })
  let oddValue = Object.values(charCount).find((value, index) => charCount[index] = (value % 2 !== 0));
  return Number(Object.keys(charCount).find(key => charCount[key] === oddValue));
}