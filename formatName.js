function list(names){
  //your code here
  let returnStr = ""
  if (names.length === 1) {
    return returnStr += names[0].name;
  }
  for(let i = 0; i < names.length; i++) {
    if (i === names.length - 1) {
      returnStr += names[i].name
    }
    else if (i === names.length - 2) {
      returnStr += names[i].name + " & "
    }
    else {
      returnStr += names[i].name + ", "
    }
  }
  return returnStr
}

// const a = list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
// console.log(a)

const b = list([ {name: 'Bart'} ])
console.log(b)