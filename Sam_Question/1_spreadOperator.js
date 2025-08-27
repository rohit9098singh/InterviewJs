// concatinate
let x=[1,2,3];
let y=[3,4,5];

let c=[...x,...y];
console.log(c)

// copying array of object

let a=[...x]  // 1,2,3

// passing array of values as individual argument to a function

function createExample(...args){
     console.log("whats here ",args)
}

createExample(...a)


