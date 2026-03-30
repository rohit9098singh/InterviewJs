// (function () {
//   var a = b = 5;
// })();

// b = 5;       // ❗ global ban gaya
// var a = 5;   // ❗ sirf IIFE ke andar

var a =b=6

console.log(b);
console.log(a);