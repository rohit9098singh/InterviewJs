const arr = [10, 20, 30];

const result = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});


const arr2 = [1, 2, 3];

const sum = arr2.reduce((acc, value, index, array) => {
  console.log(acc, value, index, array);
  return acc + value;
}, 0);
