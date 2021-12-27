const isUpperCase = (string) => /^[A-Z]*$/.test(string)

function findMissingLetter(array)
{
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  const arrLen = array.length

  let lowerCaseArr = array.map(letter => letter.toLowerCase())

  const start = alphabet.indexOf(lowerCaseArr[0])
  const end = start + array.length + 1

  const subArr = alphabet.slice(start, end)

  let returnLetter = ""

  for(const letter of subArr) {
    if (!lowerCaseArr.includes(letter)) {
      returnLetter += letter
    }
  }

  if (isUpperCase(array[0])) {
    return returnLetter.toUpperCase()
  }
  return returnLetter
}

const a = findMissingLetter(['f', 'h'])
console.log(a)
