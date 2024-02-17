/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
  ];
  const expected1 = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  /* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */
  
  
  function diagonalDifference(sqrMatrix) {
    // R.I.O.T.
    // think about the steps first
    // DRIVER 🚗
    // PRESENTER 👨‍🏫
    // NAVIGATOR 🧭
    // pseudocode here:
    //make a while loop for the number of elements in our input array
    //declare variables for 2 arrays, leftDiagonal and rightDiagonal
    //assign values of equal indexes of 0 and the length to our leftDiagonal and rightDiagonal
    //do this for each array in the input array by incrementing our while loop variable
    //add all the elements in the leftDiagonal and rightDiagonal and return the difference
    let leftDiag = 0
    let rightDiag = 0
    let i = 0
    // let j = sqrMatrix.length-(i+1)
    while (i < sqrMatrix.length) {
        leftDiag += sqrMatrix[i][i]
        // console.log(sqrMatrix[i][i])
        rightDiag += sqrMatrix[sqrMatrix.length-(i+1)][i]
        // console.log(sqrMatrix[j][i])
        i++
        // j--
    }
    return Math.abs(leftDiag-rightDiag)
  }

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))