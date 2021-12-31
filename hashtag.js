function isAlphaOrParen(str) {
  return /^[a-zA-Z()]+$/.test(str);
}

function generateHashtag (str) {
  if(str.trim().length === 0) {
    return false
  }
  let trimmedArr = str.trim().split(' ')
  for(let i = 0; i < trimmedArr.length; i++) {
    if(isAlphaOrParen(trimmedArr[i])) {
      trimmedArr[i] = trimmedArr[i][0].toUpperCase() + trimmedArr[i].slice(1);
    }
  }
  let returnStr = "#" + trimmedArr.join('')
  if(returnStr.length > 140) {
    return false
  } 
  return returnStr
}


const a = generateHashtag("Do We have A Hashtag")
console.log(a)

const b = generateHashtag("code" + " ".repeat(140) + "wars")
console.log(b)

const c = isAlphaOrParen('         ')
console.log(c)

const d = '     '
console.log(d.length)