// findSmallestInt = (args) => {
//   let smallest = args[0];
//   for(i=0; i<=args.length; i++){
//     if(args[i] < smallest) smallest = args[i] 
//   }
//   return smallest;
// }

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for(i=0; i<=args.length; i++){
      if(args[i] < smallest) smallest = args[i] 
    }
    return smallest;
  }
}

let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([8, 5, 10, 12, 1]))