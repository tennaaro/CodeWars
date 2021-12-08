function solution(str){
  let returnArr = [];
  const lenStr = str.length
  if (lenStr === 0) {
    return returnArr;
  } 
  for (let i = 0; i < lenStr; i = i+2) {
    let substr = str.substring(i, i+2)
    if (substr.length === 1) {
      substr = substr + "_";
    }
    returnArr.push(substr)
  }
  return returnArr
}
const a = solution("abcdefg");
console.log(a)
