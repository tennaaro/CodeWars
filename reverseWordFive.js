function spinWords(string){
  //TODO Have fun :)
  let arrWords = string.split(' ')
  for(let i = 0; i < arrWords.length; i++) {
    if(arrWords[i].length >= 5) {
      arrWords[i] = arrWords[i].split('').reverse().join('')
    }
  }
  return arrWords.join(' ')
}
const a = spinWords("Welcome")
console.log(a)

// const b = spinWords("Hey fellow warriors")
// console.log(b)