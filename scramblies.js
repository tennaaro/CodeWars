function scramble(str1, str2) {
  //code me
  let copy = str1
  for(let i = 0; i < str2.length; i++) {
    if(str1.includes(str2[i])) {
      copy = copy.replace(str2[i], '')
    }
    else {
      return false
    }
  }
  let len1 = str1.length - copy.length
  let len2 = str2.length
  if(len1 === len2) {
    return true
  }
  return false
}



const a = scramble('cedewaraaossoqqyt','codewars')
console.log(a)

// const b = scramble('katas','steak')
// console.log(b)