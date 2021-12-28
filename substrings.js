function inArray(array1,array2){
  let returnArr = []
  for(const word1 of array1) {
    for(const word2 of array2) {
      if(word2.includes(word1) && !returnArr.includes(word1)){
        returnArr.push(word1)
      }
    }
  }
  return returnArr.sort()
}

a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

const a = inArray(a1,a2)
console.log(a)