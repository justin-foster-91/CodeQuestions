
// function order2(word){
//   let key = {};
//   key[word.replace(/[a-z]/gi, '')] = word
//   return key;
// }

function order2(word){
  return {position: word.replace(/[a-z]/gi, ''), word: word};
}

console.log(order2('T4est'))