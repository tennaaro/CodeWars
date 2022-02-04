const highest = arr => (arr || []).reduce( ( acc, el ) => {
  acc.k[el] = acc.k[el] ? acc.k[el] + 1 : 1
  acc.max = acc.max ? acc.max < acc.k[el] ? el : acc.max : el
  return acc  
}, { k:{} }).max

function find(seq) {
  let sortedSeq = seq.sort(function(a,b) {
    return a - b
  })
  let differences = []
  differences.push(sortedSeq[1] - sortedSeq[0])
  differences.push(sortedSeq[2] - sortedSeq[1])
  differences.push(sortedSeq[3] - sortedSeq[2])
  
  const highestDiff = highest(differences)
  
  let start = sortedSeq[0]
  let correctArr = []
  correctArr.push(start)
  for (let i = 0; i < sortedSeq.length; i++) {
    start += highestDiff
    correctArr.push(start)
  }
  
  let sum1 = 0
  for (let i = 0; i < sortedSeq.length; i++) {
    sum1 += sortedSeq[i]
  }
  
  let sum2 = 0
  for (let j = 0; j < correctArr.length; j++) {
    sum2 += correctArr[j]
  }
  
  return sum2 - sum1
}