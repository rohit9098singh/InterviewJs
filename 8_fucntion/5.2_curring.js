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
// console.log(NaN)

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
const result2=order("Pizza")("Medium")("sunil")
console.log(result2)
console.log(result); // Output: Anita, your Medium Pizza is ready!
