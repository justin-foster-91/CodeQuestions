function points(games) {
  let score = games.forEach(idx => 
    // Number(idx.split(':'))
    idx.split(':')
  )
  return score;
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));
