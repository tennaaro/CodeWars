function findUniq(arr) {
  // do magic
  // for(let i = 0; i < arr.length; i++) {
  //   let copy = [...arr]
  //   copy.splice(i, 1)
  //   if(!copy.includes(arr[i])) {
  //     return arr[i]
  //   }
  // }
  let set = new Set(arr)
  let arrSet = Array.from(set)

  let counter = 0
  for (const item of arr) {
    if(arrSet[0] === item) {
      counter += 1
    }
    if(counter >= 2) {
      return arrSet[1]
    }
  }
  return arrSet[0]
}

const a = findUniq([ 1, 1, 1, 2, 1, 1 ])
console.log(a)