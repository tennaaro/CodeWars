function solution(input, markers) {
  const arrInput = input.split('\n')
  let returnArr = []
  for(const item of arrInput) {
    let returnItem = item
    for(const mark of markers) {
      if(item.includes(mark)) {
        returnItem = item.slice(0, item.indexOf(mark) - 1)
      }
    }
    returnArr.push(returnItem)
  }
  return returnArr.join('\n')
};

const result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])

console.log(result)

// for(let i = 0; i < markers.length; i++) {
//   for(let j = 0; j < arrInput.length; j++) {
//     if(markers[i] === arrInput[j] || arrInput[j].includes(markers[i])) {
//       arrInput[j] = ''
//     }
//   }
// }
// return arrInput.join(" ").replace("  ", " ").replace(" and", ",").trim()