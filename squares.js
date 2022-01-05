function getSubsets(array, sum) {
  function fork(i = 0, s = 0, t = []) {
      if (s === sum) {
          result.push(t);
          return;
      }
      if (i === array.length) {
          return;
      }
      if (s + array[i] <= sum) { // shout circuit for positive numbers only
          fork(i + 1, s + array[i], t.concat(array[i]));
      }
      fork(i + 1, s, t);
  }
  var result = [];
  fork();
  return result;
}

function decompose(n) {
  // your code
  let sqrdNum = n ** 2;
  let arr = [];
  let sqrdArr = [];
  let counter = 1;
  while (counter ** 2 < sqrdNum) {
    arr.push(counter);
    sqrdArr.push(counter ** 2);
    counter += 1;
  }

  let subset = getSubsets(sqrdArr.reverse(), sqrdNum)
  if(subset.length === 0) {
    return []
  }
  return subset[0].reverse().map(val => Math.sqrt(val))
}

// console.log(getFirstSubset([10, 1, 2, 4, 6, 3], 9));

let a = decompose(11);
console.log(a);
