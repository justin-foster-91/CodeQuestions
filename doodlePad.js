function dirReduc(arr){
  let NS = 0;
  let EW = 0;
  
  arr.map(dir => {
    switch (dir) {
        case 'NORTH': NS++; break;
        case 'SOUTH': NS--; break;
        case 'EAST': EW++; break;
        case 'WEST': EW--; break;
    }
    console.log(NS, EW)
  })
  
  let nsArr = []
  if (NS > 0) nsArr = 'NORTH '.repeat(Math.abs(NS)).split(' ')
  if (NS < 0) nsArr = 'SOUTH '.repeat(Math.abs(NS)).split(' ')

  let ewArr = []
  if (EW > 0) ewArr = 'EAST '.repeat(Math.abs(EW)).split(' ')
  if (EW < 0) ewArr = 'WEST '.repeat(Math.abs(EW)).split(' ')

  return nsArr.concat(ewArr).filter(el => el != '');
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));