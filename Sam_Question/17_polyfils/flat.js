function flattenArray(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); 
    } else {
      result.push(item);
    }
  }
  return result;
}

const nestedArray = [1, [2, [3, 4], [7, 5]], 6];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 7, 5, 6]

// ===============================================================
const nestedArray2 = [1, [2, [3, 4], [7, 5]], 6];
const flattenedArray2 = nestedArray2.flat(Infinity);

console.log(flattenedArray2);