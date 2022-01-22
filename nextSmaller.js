const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

function nextSmaller(n) {
  let arrNum = n.toString().split('')
  let len = arrNum.length
  if(len <= 1) {
    return - 1
  }
  let perms = permutations(arrNum)
  let filtered = perms.filter(num => num[0] !== '0')
  let numbers = filtered.map(num => Number(num.join('')))
  let lessThan = numbers.filter(num => num < n)
  if (lessThan.length === 0) {
    return -1
  }
  let max = lessThan.reduce(function(a, b) {
    return Math.max(a, b);
  }, 0);
  return max
}

const a = nextSmaller(135)
console.log(a)