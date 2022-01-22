function dblLinear(n) {
  // your code
  let u = [1];
  let copy = [...u]
  while (u.length < 2 * n + 1) {
    for(const item of u) {
      let y = 2 * item + 1
      let x = 3 * item + 1
      if(!copy.includes(y)) {
        copy.push(y)
      }
      if(!copy.includes(x)) {
        copy.push(x)
      }
    }
    u = [...copy]
  }
  u.sort(function(a, b) {
    return a - b;
  });
  return u[n]
}

const a = dblLinear(50)
console.log(a)