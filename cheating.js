function removeNb (n) {
  let arr = []
  for(let i=1; i<=n; i++) {
    arr.push(i)
  }
  let rval = []
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      let copy = [...arr]
      let mult = copy[i] * copy[j]

      if(i === j) {
        continue
      }
      else if(j > i) {
        copy.splice(j, 1)
        copy.splice(i, 1)
      }
      else {
        copy.splice(i, 1)
        copy.splice(j, 1)
      }

      let sum = copy.reduce((partial_sum, a) => partial_sum + a, 0)

      if(sum === mult) {
        rval.push([arr[i], arr[j]])
      }
    }
  }
  return rval
}

let a = removeNb(3)
console.log(a)