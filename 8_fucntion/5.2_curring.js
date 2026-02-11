// Currying is a process in JavaScript where a function with multiple
// Arguments is transformed into a sequence of functions that each take a single argument.

function Base(value1){
  return function(value2){
    return value1*value2
  }
}

const ref=Base(2);
console.log("check what the ref",ref)

for(let i=0;i<10;i++){
  console.log(`2*${i}=${ref(i)}`)
}


// console.log(multiply(2)(3)(4)); // 24
