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

getSpiraledFlatArray(arr1)
