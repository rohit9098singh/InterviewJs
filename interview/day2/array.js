
// JS arrays are sparse. Empty slots count in .length.
// Ek aisa array jisme kuch indexes skip ya empty ho — un pe koi value assign nahi hai.

// let arr = [1, 2, 3];
// arr.length = 0;
// console.log(arr);

// Output: []
// length = 0 clears the array.

let arr = [1, 2, 3];
arr.length = 5;
console.log(arr);

// let arr = [1, 2, 3];
// console.log(typeof arr);
//Output: "object"

console.log([1, 2] == [1, 2]); // false
console.log(JSON.stringify([1, 2]) == JSON.stringify([1, 2]));  // true
// 🧠 Different references in memory.


// javaScript ke array methods push() aur pop() ka kaam bilkul stack (Last In First Out) ke jaise hota hai. 
// let arr = [1, 2, 3];
// arr.push(4);
// console.log("when pushed",arr)
// console.log(arr.pop());
// Output: 4


let arr2 = [1, 2, 3];
console.log(arr2.slice(1, 2));

// arr2.splice(2,1,6,4,5)
// console.log("cpliced value",arr2)
console.log("slice value is what at here jsut check it out here ",arr2)

// splice() nikale gaye elements ka array return karta hai.
// let arr = [1, 2, 3];
// console.log(arr.splice(1, -1));
// console.log("shayad as it is return ho jaygwa vo",arr)
// Dekho, splice(start, deleteCount) ka second parameter (deleteCount) always ≥ 0 hona chahiye.
// Agar tum negative value doge (-1 jaise), to JavaScript usko 0 treat karta hai.

// let arr = ["a", "b", "c"];
// console.log(arr.join("-"));
//  Output: "a-b-c"

// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// Output: [3, 2, 1]
// 🧠 reverse() mutates the original array.