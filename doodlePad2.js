function list(names){
  if (names.length === 0) return '';
  if (names.length === 1) return `${names[0].name}`;
  if (names.length === 2) return `${names[0].name} & ${names[1].name}`;
  if (names.length >= 3) {
    let str = '';
    for (let i=0; i<names.length-2; i++){
      str = str.concat(`${names[i].name}, `)
    }
    str = str.concat(`${names[names.length-2].name} & ${names[names.length-1].name}`)
    return str;
  };
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));