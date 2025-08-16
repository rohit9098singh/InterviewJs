let result = 0 / 0;
console.log(result); // NaN


let result2 = parseInt("abc");
console.log(result2); // NaN

let result3 = undefined + 5;
console.log(result3); // NaN

let result4 = "hello" * 2;
console.log(result4); // NaN


let result5 = 10 - {};
console.log(result5); // NaN

let res=10 + {}
console.log(res)
