// function add(a,b){
//     return a+b;
// }

// console.log(add(3,4))

// // impure 

// let count=0;

// function incementCount(){
//     count ++;
//     console.log(count);
// }
// console.log(incementCount())
// console.log(incementCount())
// console.log(incementCount())



let arr = [1,2,3,4,5,0,10];
let newArr = arr.splice(2,4,8,9,6);
// splice(startIndex,numberOfItemsToRemove,replaceElements
console.log(arr); // [1,2,8,9,6,10]
console.log(newArr);

