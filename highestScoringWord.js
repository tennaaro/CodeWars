function high(x){
  const dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9,'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19,
  't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y': 25, 'z':26}

  let words = x.split(' ')
  let scores = []
  for(const word of words) {
    let score = 0
    for(const letter of word) {
      score += dict[letter]
    }
    scores.push(score)
  }
  const max = Math.max(...scores)
  const index = scores.indexOf(max)
  return words[index]
}

const a = high("what time are we climbing up the volcano")
console.log(a)