function doors(n){
  let startingArray = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    for (let j = i; j <= n; j += i) {
      if (startingArray[j] === 0) {
        startingArray[j] = 1
      } else {
        startingArray[j] = 0
      }
    }
  }
  let sum = startingArray.reduce(function(a, b){
    return a + b;
  });
  return sum;
}

console.log(doors(5));
console.log(doors(10));
console.log(doors(100));