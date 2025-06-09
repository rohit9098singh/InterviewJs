// let arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length);

// JS arrays are sparse. Empty slots count in .length.
// Ek aisa array jisme kuch indexes skip ya empty ho — un pe koi value assign nahi hai.

// let arr = [1, 2, 3];
// arr.length = 0;
// console.log(arr);

// Output: []
// length = 0 clears the array.

// let arr = [1, 2, 3];
// arr.length = 5;
// console.log(arr);

// let arr = [1, 2, 3];
// console.log(typeof arr);
//Output: "object"

console.log([1, 2] == [1, 2]);
//Output: false
// 🧠 Different references in memory.


// javaScript ke array methods push() aur pop() ka kaam bilkul stack (Last In First Out) ke jaise hota hai. 
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr.pop());
//Output: 4


// let arr = [1, 2, 3];
// console.log(arr.slice(1, 2));

// splice() nikale gaye elements ka array return karta hai.
// let arr = [1, 2, 3];
// console.log(arr.splice(1, -1));

// let arr = ["a", "b", "c"];
// console.log(arr.join("-"));
//  Output: "a-b-c"

let arr = [1, 2, 3];
arr.reverse();
console.log(arr);

// Output: [3, 2, 1]
// 🧠 reverse() mutates the original array.