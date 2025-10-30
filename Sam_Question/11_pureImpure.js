// function add(a,b){
//     return a+b;
// }

// console.log(add(3,4))

// impure 

// let count=0;

// function incementCount(){
//     console.log("at here ",count++)
//     count ++;
//     console.log("after changes",count);
// }
// console.log(incementCount())
// console.log(incementCount())
// console.log(incementCount())



// let arr = [1,2,3,4,5,0,10];
// let newArr = arr.splice(2,4,8,9,6);
// // splice(startIndex,numberOfItemsToRemove,replaceElements
// console.log(arr); // [1,2,8,9,6,10]
// console.log(newArr);

// let a=10;
// function check(a,b){
//     return a +b;
// }
// a=30
// console.log("final result at here ",check(a,10))

let counter = 0;

function increment() {
  counter++; // modifies external variable → side effect
  return counter;
}

console.log(increment()); // 1
console.log(increment()); // 2
