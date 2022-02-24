

// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof matrix == 'undefined') {
    return []
  } else {
    let result = [];
    let strLength = 0;
    for (let i = 0; i < matrix.length; i++) {
      strLength = matrix[i].length;
      if (i % 2 === 0) {
        for (let j = 0; j < strLength; j++) {
          result = result.concat(matrix[i].slice(j, j + 1));
        }
      } else {
        let k = strLength - 1;
        while (k >= 0) {
          result = result.concat(matrix[i].slice(k, k + 1));
          k = k - 1;
        }
      }
    }
    return result;
  }
}