//  DEFINITAION => shadowing is a concept in js where a varibale or a fucntion defined in an outer scope is shadowd by the another var with the same name in another scope 

// let a =100;

// {
//     let a =10;
//     console.log("first",a)
// }
// console.log("outside black",a)




// let x="outer";
// {
//     console.log(x);
//     let x="inner";

// }
// error  refrence error because trying to access before inititlization



var a=5;

function test(){
    console.log(a); // undefined
    var a=10;
    {
        let a=15;
        console.log(a); // 15 
    }
    console.log(a) // 10
}

test();




// var y = "global-var"; // global scope momory alocation
// let z = "script-let"; // script scope memory allocation

// {
//   var y = "block-var"; // global scope momory alocation
//   let z = "block-let"; // block scope memory allocation
// }

// console.log(window.y); // ? // block-var
// console.log(window.z); // ? //  undefined


let a = 1;  //scrit scope

function outer() {
  let a = 2;  // global scope

  if (true) {
    let a = 3;  // global scope
    console.log(a); // ?  // 3
  }

  console.log(a); // ?  //2
}

console.log(a); // ? // 1
outer();


// let num = 100;  // global script scope 

// function outer() {
//   let num = 200;   // local scope of outer

//   function inner() {
//     console.log(num); // ?
//   }

//   return inner;
// }

// const result = outer();
// result();

// greet()
// console.log(greet())
// const greet=function hello(){
//     console.log("hello")
// }

// greet()