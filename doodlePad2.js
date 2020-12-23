function dirReduc(arr){
  for (let i=0; i<arr.length; i++){
    arr = arr.filter(n => n)
    pairCompare(arr)
    console.log(arr)
  }

  return arr.filter(n => n);
}

function pairCompare(arr){
  let NS = ['NORTH', 'SOUTH'];
  let EW = ['EAST', 'WEST'];

  let previous = '';
  let current = '';
  for (let i=0; i<arr.length; i++){
    current = arr[i];
    if(NS.includes(current) && NS.includes(previous) && current !== previous) {
      delete arr[i-1];
      delete arr[i];
      return;
    };
    if(EW.includes(current) && EW.includes(previous) && current !== previous) {
      delete arr[i-1];
      delete arr[i];
      return;
    };
    previous = current;
  }
  return arr;
}

// console.log('Start: ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]');
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
// console.log('Expect: ["WEST"]')

// console.log("Start: ['EAST', 'WEST', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'NORTH', 'SOUTH']");
// console.log(dirReduc(['EAST', 'WEST', 'SOUTH', 'NORTH', 'NORTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'NORTH', 'SOUTH']))
// console.log("Expect: ['NORTH', 'NORTH', 'NORTH']")

console.log("Start: ['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'EAST', 'SOUTH', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'WEST']");
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'EAST', 'SOUTH', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'EAST', 'WEST']))
console.log("Expect: ['EAST', 'NORTH']")
