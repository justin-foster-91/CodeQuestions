function titleCase(s) {
  return s[0].toUpperCase() + s.slice(1).toLowerCase()
}

function accum(s) {
	s.split('').map(char => char = char * s.indexOf(char))
}

console.log(titleCase('greetings'))