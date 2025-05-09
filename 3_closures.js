// function x(){
//     let a =10;
//     return {
//         hello:function (){
//             console.log("hello world")
//         }
//     }
// }

// const yes=x();
// console.log(yes.hello())  // helo world and undefined 

// yes.hello => to hello world print kar deta hai but vo return kuch nhi karta hai isliye usko undedined milta hai

 


// function x() {
//     let a = 10;
//     return {
//         hello: function (amount) {
//             return "hello world";  //  returning the string instead of logging it
//         }
//     }
// }

// const yes = x();
// console.log(yes.hello());  // prints: hello world
// console.log(yes.a)  // undefined


// ==============================  use this example to explain ===============================

// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z=x();
// console.log(z)
// z()  // returns 7 intresting this is what clousure is 

// see kya hua ke jab x ko hamne z me assign kiya to z me vo [Function: y] ye aagya aab jab hm z() ko call karegnge to uske pas a ka access to hona nhi hona chaye tha kyuke vo to bas y fucntion ko aapne andar rakha hai but aisa nhi hota vo yaadh rakhta hai usko a varible ko

// reson is fucntion alsong with its lexical scope was returend



// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=1000
//     return y;
// }

// var z=x();
// console.log(z)
// z() 


// function z() {
//     var b = 1000;

//     function x() {
//         var a = 7;

//         function y() {
//             console.log(a, b); // Accesses both a and b via closure
//         }
//         a=2000
//        y();
//     }

//      x(); // Call x() and return y
//      return 2
// }
// z();

// var c = z();    // c now holds function y
// console.log(c); // Prints the function definition
// c();            //  Calls y() — prints

 
  