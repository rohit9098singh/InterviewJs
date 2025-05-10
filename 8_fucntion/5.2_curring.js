// let multiply=function(x,y){
//     console.log(x*y);
// }

// let multiplyByTwo=multiply.bind(this,4,6);
// multiplyByTwo();

// let multiplyByThree=multiply.bind(this,4);
// multiplyByTwo(6); // here 6 will be y


// with closure 

let multiply2 =function(x){
     return function(y){  // this y varible has an excess to x even after return itself this is only what closure is
        console.log(x*y);
     }
}
 
let multiplyByTwo=multiply2(2);
multiplyByTwo(3);
console.log(NaN)


