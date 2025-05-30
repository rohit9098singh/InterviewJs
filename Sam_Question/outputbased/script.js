const a =1<2<3;
const b=1>2>3;

console.log(a,b);


// falsy values = false, 0, "", null, undefined, NaN
const removeFalsy = (arr) => {
  return arr.filter(Boolean);
};

const mixedArray = [0, "hello", false, undefined, 42, "", null, "JS", NaN];

console.log(removeFalsy(mixedArray));

// double == vs tripleequal ===
const val1 = 5;
const val2 = "5";

console.log(val1 == val2);   
console.log(val1 === val2);
 
// object reference type question
const p = { k: 1, l: 2 };
const q = { k: 1, l: 2 };
let isEqual = p==q;
console.log(isEqual)
let isStartEqual = p=== q;
console.log(isStartEqual)
