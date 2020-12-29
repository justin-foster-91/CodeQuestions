// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

let left = 1**3 + 5**3 + 3**3;
let right = 1 + 125 + 27;
let val = 153;

// console.log(left, right, val);

// function narcissistic(value) {
//   let length = Number(value.toString().length);
//   let valArr = value.toString().split('');
//   valArr = valArr.map(char => Number(char))
//   return valArr.reduce((accum, num) => {
//     console.log(accum);
//     return accum + (num**length)
//   });
// }

function narcissistic(value) {
  let length = Number(value.toString().length);
  let valArr = value.toString().split('');
  valArr = valArr.map(num => Number(num)**length)
  return valArr.reduce((accum, num) => accum + num) === value;
}

console.log(narcissistic(371));
// 27 + 343 + 1