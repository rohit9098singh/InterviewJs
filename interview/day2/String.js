console.log("5" + 1);
//Explanation: + operator with a string converts number to string and concatenates.

console.log("5" - 1);
// reverse of above

console.log("5" * "2");
//Explanation: Both strings coerced to numbers and multiplied.

console.log("5" / "2");
// same as aobve multiply works

console.log("5" + true);
//true converted to string "true", concatenated.

console.log("5" - true);
//true coerced to number 1. So 5 - 1 = 4

console.log("5" + undefined);
 Output: "5undefined"

 console.log("5" - undefined);
//NaN

console.log("" == 0);
//Empty string coerced to number 0.

console.log(" " == 0);

console.log("0" == false);
//true
// "0" coerced to number 0, false coerced to 0.

console.log(false == undefined);
// Output: false
// 🧠 undefined only loosely equals null

console.log(null == undefined);

console.log("5" === 5);


console.log("5" != 5);
// Output: false
// 🧠 Loose inequality, "5" coerced to number 5, so they are equal.