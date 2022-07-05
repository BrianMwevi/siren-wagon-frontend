var vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelIndices(word) {
  var foundIndexes = [];  
  for (let i = 0; i < word.length; i++) {
          if (vowels.indexOf(word[i].toLowerCase()) > -1) {
    
          foundIndexes.push(i + 1);
    }
  }

  return foundIndexes;
}

console.log('Mmmm', vowelIndices('Mmmm'));
console.log('Super', vowelIndices('Super'));
