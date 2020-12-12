function spinWords(s){
  let rev = [];
  let sArr = s.split(' ');

  for (let i=0; i<=sArr.length; i++){
    (sArr[i].length >= 5) 
      ? rev.push(sArr[i].split('').reverse().join('')) 
      : rev.push(sArr[i]);
  }
  return rev.join(' ');
}