function sumNumber(number) {
  let sum = 0
  for(const num of number) {
    sum = sum + Number(num)
  }
  return sum
}

function orderWeight(strng) {
  // your code
  let mappingObject = {}
  let arrStrng = strng.trim().split(" ")
  let mappedSum = arrStrng.map(num => sumNumber(num))
  for(let i = 0; i < arrStrng.length; i++) {
    mappingObject[mappedSum[i]] = arrStrng[i]
  }
  let orderedSum = mappedSum.sort(function(a,b) {
    return a-b
  })
  let revertMap = orderedSum.map(sum => mappingObject[sum])
  return revertMap.join(" ")
}

// const a = orderWeight("103 123 4444 99 2000")
// console.log(a)
// "2000 103 123 4444 99"
// const b = orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")
// console.log(b)

let a = '20 4 4 4 106 106 17 72 82 95 95 46171 254162 255405 255405 87530 498300 452942 265581 238177 395854'
const c = orderWeight(a)
console.log(c)

let b = '20 31 4 40 106 7 17 72 82 95 95 46171 254162 255405 52437 87530 498300 452942 265581 238177 395854'
console.log(b)