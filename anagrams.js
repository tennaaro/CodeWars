function anagrams(word, words) {
  let copy = [...words]
  let returnArr = []
  for(let i = 0; i < words.length; i++) {
    for(let j = 0; j < word.length; j++) {
      if(copy[i].includes(word[j])) {
        copy[i] = copy[i].replace(word[j], '')
      }
    }
  }
  for(let k = 0; k < copy.length; k ++) {
    if(copy[k].length === 0) {
      returnArr.push(words[k])
    }
  }
  return returnArr
}

const a = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
console.log(a)
