function determinant(m) {
  // return the determinant of the matrix passed in
  if(m.length === 1) {
    return Math.abs(m[0][0])
  }
  else if(m.length === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0]
  }
  else {

  }
};

// let m1 = [ [1, 3], [2,5]]
// console.log(m1)

const removeCol = function(arr, colIndex) {
  for (let i = 0; i < arr.length; i++) {
      let row = arr[i];
      row.splice(colIndex, 1);
  }
}

let m3 = [[1,2,3], [4,5,6], [7,8,9]]
console.log(m3)
// m3.splice(1,1)
// console.log(m3)
removeCol(m3)
console.log(m3)



// console.log(determinant(m1))

// let m2 = [[1]]
// console.log(determinant(m2))