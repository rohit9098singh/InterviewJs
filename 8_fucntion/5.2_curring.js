// Currying is a process in JavaScript where a function with multiple 
// arguments is transformed into a sequence of functions that each take a single argument.

// let multiply=function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo=multiply.bind(this,4,6);
// multiplyByTwo();

// let multiplyByThree=multiply.bind(this,4);
// multiplyByTwo(6); // here 6 will be y


// with closure 

// let multiply2 =function(x){
//      return function(y){  // this y varible has an excess to x even after return itself this is only what closure is
//         console.log(x*y);
//      }
// }
 
// let multiplyByTwo=multiply2(2);
// multiplyByTwo(3);
// multiplyByTwo(4);
// multiplyByTwo(5);
// multiplyByTwo(6);
// console.log(typeof(NaN))

// function add(a,b){
//    return a+b;
// }

// console.log(add(3,4))


function order(item) {
  return function(size) {
    return function(name) {
      return `${name}, your ${size} ${item} is ready!`;
    };
  };
}

const result = order("Pizza")("Medium")("Anita");
const result2=order("Pizza")("Medium")("sunil");
console.log(result2);
console.log(result); 


function multiply(base){
     return function (value){
        return base * value;
     }
}

const multiply2=multiply(2)

for(let i=1;i<10;i++){
    console.log(`2 * ${i} =${multiply2(i)}`)
}



