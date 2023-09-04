const arr1 = [
  [1, 2, 3, 4, 5],
  [14, 15, 16, 17, 6],
  [13, 20, 19, 18, 7],
  [12, 11, 10, 9, 8]
];

const getSpiraledFlatArray = (arr) => {
  let result = [...arr[0]];

  for (let index = 0; index < arr.length; index++) {
    if (index !== 0 && index !== arr.length - 1) {
      const currentArr = arr[index];

      result.push(currentArr[currentArr.length - 1]);
    }
  }

  result = [...result.concat(arr[arr.length - 1].reverse())];

  for (let index = arr.length - 1; index > 0; index--) {
    if (index !== 0 && index !== arr.length - 1) {
      const currentArr = arr[index];

      result.push(currentArr[0]);
    }
  }

  for (let index = 0; index < arr.length; index++) {
    if (index !== 0 && index !== arr.length - 1) {
      const currentArr = arr[index];

      for (let index = 0; index < currentArr.length; index++) {
        console.log(currentArr[index]);
        if (index !== 0 && index !== currentArr.length - 1) {
          result.push(currentArr[index]);
        }
      }
    }
  }

  return result;
};

function spiralTraversal(arr) {
  const result = [];

  let startRow = 0;
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // traverse right
    for (let i = startCol; i <= endCol; i++) {
      result.push(arr[startRow][i]);
    }
    startRow++;

    // traverse down
    for (let i = startRow; i <= endRow; i++) {
        console.log(arr[i][endCol])
      result.push(arr[i][endCol]);
    }
    endCol--;

    // traverse left
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        result.push(arr[endRow][i]);
      }
      endRow--;
    }

    // traverse up
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        result.push(arr[i][startCol]);
      }
      startCol++;
    }
  }

  return result;
}

getSpiraledFlatArray(arr1)
