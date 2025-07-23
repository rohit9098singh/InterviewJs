function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); 


// impure function
let x = 5;

function addToX(a) {
  return a + x;
}

console.log(addToX(2)); 

x = 10;

console.log(addToX(2));

// pure function 


