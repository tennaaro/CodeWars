function count(string) {  
  // The function code should be here
  let returnObj = {}
  for (const char of string) {
    returnObj[char] = 0
  }
  for (const char of string) {
    returnObj[char] += 1
  }
  return returnObj;
}
const a = count("aba")
console.log(a)