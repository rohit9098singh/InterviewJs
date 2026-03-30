// Currying is a process in JavaScript where a function with multiple
// Arguments is transformed into a sequence of functions that each take a single argument.

// function Base(value1){
//   return function(value2){
//     return value1*value2
//   }
// }

// const ref=Base(2);
// console.log("check what the ref",ref)

// for(let i=0;i<10;i++){
//   console.log(`2*${i}=${ref(i)}`)
// }



// with named fuction
var x = function test() {
  console.log(typeof test);
};

x();
console.log(typeof test);  // fucntion ,undefined

// with normal fucntion 
function test() { 
  console.log(typeof test);
};

test();
console.log(typeof test); // fucntion , function

// with arrow fucntion
var x = () => {
  console.log(typeof x);
};

x();
console.log(typeof x); // function , function

// console.log(typeof b);
// const b = 20;  // Reference Error

console.log(typeof c);
var c = 30; // undefined

// most tricky part 
