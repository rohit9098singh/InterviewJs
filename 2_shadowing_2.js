function greet(){
    console.log("hello world ")
}

function greet2(){
   function greet(){
    console.log("inside the greet 2")
   }
   greet();

}

greet();
greet2();





// hello world, inside the greet 2
// ============================ 2 ====================

// var a=5;

// function test(){
//     var a =10;
//     if(true){
//         let a =20;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

// console.log(a);

// output => 20 10 5

// ============================ 3 ==============================

// let x =50;

// function outer(){
//     let x=100;
//     function inner(){
//         let x=200;
//         console.log(x);
//     }
//     inner();
//     console.log(x);
// }

// outer();
// console.log(x);

//  output => 200 100 50


// ============================ 4 ==============================

// function outer(a){
//     let b=5;

//     function inner(b){
//         console.log(a);  // 20 
//         console.log(b); // 10
//     }

//     inner(10)
// }

// outer(20);



