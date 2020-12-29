function zero(x) {
  if (x === undefined) return 0
  return x(0)
}
function one(x) {
  if (x === undefined) return 1
  return x(1)
}

function times(x) {return (y) => {
  return x * y;
}}

console.log(one(times(one())))
console.log(one(times(zero())));