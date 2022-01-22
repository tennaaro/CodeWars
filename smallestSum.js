function solution(numbers) {
  // Xi > Xj => Xi = Xi - Xj
  // [6, 9, 12] => [3,3,3]
  let copy = [...numbers]
  for (let i = 0; i < numbers.length; i++) {
    let idx1 = i
    let idx2 = (i+1)%(numbers.length)
    if(numbers[idx1] > numbers[idx2]) {
      numbers[idx1] = numbers[idx1] - numbers[idx2]
    }
  }
  return numbers
}

// const a = solution([6,9,12])
// console.log(a)

let b = [14,12,2,3]
var m = Math.min(...b);
console.log(m)