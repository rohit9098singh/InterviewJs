function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const placeHolder = item[key];
    if (!result[placeHolder]) {
      result[placeHolder] = [];
    }
    result[placeHolder].push(item);
    return result;
  }, {});
}

// Example usage
const user = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

console.log(groupBy(user, "age"));
