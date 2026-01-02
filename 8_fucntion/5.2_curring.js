// Currying is a process in JavaScript where a function with multiple
// Arguments is transformed into a sequence of functions that each take a single argument.

// let multiply=function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo=multiply.bind(this,4,6);
// multiplyByTwo();

// let multiplyByThree=multiply.bind(this,4);
// multiplyByTwo(6); // here 6 will be y

// with closure

// function multiply(base){
//      return function (value){
//         return base * value;
//      }
// }

// const multiply2=multiply(2)

// for(let i=1;i<10;i++){
//     console.log(`2 * ${i} =${multiply2(i)}`)
// }

function Base(value1){
  return function(value2){
    return value1*value2
  }
}

const ref=Base(2);

for(let i=0;i<10;i++){
  console.log(`2*${i}=${ref(i)}`)
}


function  currying(BaseValue){
   return function(childValue){
    return BaseValue * childValue
   }
}

const ref2=currying(2)

for(let i=0;i<10;i++){

  console.log(`2 * ${i} = ${ref2(i)}`)
}