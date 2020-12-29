function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// --------

function generateHashtag (str) {
  if (!str.trim()) return false;
  let hashtag = '#' + str.split(' ').map(word => {if(word.trim()) return titleCase(word)}).join('')
  return (hashtag.length < 141) ? hashtag : false;
}

function titleCase(word){
  return word[0].toUpperCase() + word.slice(1)
}

console.log('--->' + blah('           ') + '<---');