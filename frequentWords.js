function topThreeWords(text) {
  let removeWhiteSpaces = text.replace(/\s+/g, ' ').trim()
  let arrText = removeWhiteSpaces.split(" ")
  for(let i=0; i<arrText.length; i++) {
    while(arrText[i].includes('.')) {
      arrText[i] = arrText[i].replace('.', '')
    }
    while(arrText[i].includes('/')) {
      arrText[i] = arrText[i].replace('/', '')
    }

  }
  console.log(arrText)
  let dictCounter = {}
  for(const item of arrText) {
    if(!(item in dictCounter)) {
      dictCounter[item] = 1
    } else {
      dictCounter[item] += 1
    }
  }

  let sortedArr = []
  for (const item in dictCounter) {
    sortedArr.push([item, dictCounter[item]])
  }
  sortedArr.sort(function(a, b) {
    return b[1] - a[1];
  });

  let len = Object.keys(dictCounter).length

  return sortedArr
}

// let a = topThreeWords("a a a  b  c c  d d d d  e e e e e")
// console.log(a)

// let b = topThreeWords("   ...   ")
// console.log(b)

let c = topThreeWords("  //wont won't won't ")
console.log(c)