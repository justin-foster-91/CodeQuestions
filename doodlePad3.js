function anagramCompare(wordA, wordB) {
  let countA = {};
  let countB = {};

  wordA.split('').map(char => (countA[char]) ? countA[char]++ : countA[char] = 1);
  wordB.split('').map(char => (countB[char]) ? countB[char]++ : countB[char] = 1);

  return (isEqual(countA, countB));
}

function anagrams(word, words) {
  return words.filter(wordComp => anagramCompare(word, wordComp))
}

function isEqual(obj1, obj2) {
  let props1 = Object.getOwnPropertyNames(obj1);
  let props2 = Object.getOwnPropertyNames(obj2);
  
  if (props1.length != props2.length) {
    return false;
  }  for (let i = 0; i < props1.length; i++) {
    let prop = props1[i];
    
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }
  }

  return true;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))