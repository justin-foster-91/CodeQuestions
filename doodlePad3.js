function keyCycle(letter){
  let upperKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerKey = 'abcdefghijklmnopqrstuvwxyz';

  let useKey = (letter.toUpperCase() === letter) ? upperKey : lowerKey;
  let letterNum = useKey.split('').indexOf(letter);

  console.log(useKey[(letterNum+13) % 26])

  return useKey[(letterNum+13) % 26];
}

function rot13(message){
  let cypher = message.split('').map(char => (char.match(/[a-z]/gi)) ? keyCycle(char) : char).join('');
  return cypher;
}

console.log(rot13("Test"))