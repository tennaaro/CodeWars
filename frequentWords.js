function lettersOnly(str) {
	return str.replace(/[^a-zA-Z ']/g,"");
}
function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}

function topThreeWords(text) {
  let removeWhiteSpaces = text.replace(/\s+/g, ' ').trim()
  let arrText = removeWhiteSpaces.split(" ")
  let mapping = arrText.map(str => lettersOnly(str).toLowerCase())

  if(mapping[0].length === 0 && mapping.length === 1) {
    return []
  }
  if(mapping.length === 1 && !isCharacterALetter(mapping[0])) {
    return []
  }

  let dictCounter = {}
  for(const item of mapping) {
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


  let rval = []
  if (len < 3) {
    for(const item of sortedArr) {
      if(item[0].length > 0) {
        rval.push(item[0])
      }
    }
  }
  else {
    rval.push(sortedArr[0][0], sortedArr[1][0], sortedArr[2][0])
  }

  return rval
}

// let a = topThreeWords("a a a  b  c c  d d d d  e e e e e")
// console.log(a)

// let b = topThreeWords("   ...   ")
// console.log(b)

// let c = topThreeWords("  //wont won't won't ")
// console.log(c)

// let d = topThreeWords("  '  ")
// console.log(d)

let e = topThreeWords("  , e   .. ")
console.log(e)