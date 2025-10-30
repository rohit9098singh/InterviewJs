function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN, 1, 2, 3, 3, 4];
console.log(removeFalsyValues(falsyValues)); // [1, 2, 3, 3, 4]
