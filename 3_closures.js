// A closure is created when a function is defined inside another function, and the inner function remembers the variables from the outer function — even after the outer function has finished running.
// This happens because JavaScript uses lexical scoping, which allows the inner function to "close over" or keep a reference to the outer function’s variables.
// Since the inner function can still access those variables, they are not removed by the garbage collector.
// This ability of remembering and using the outer function’s variables is what we call a closure.
// Just like they remember the variables, inner functions can also access outer functions (if they're defined as variables or function declarations).

// function outer() {
//     function greet() {
//         return "Hello";
//     }

//     function inner() {
//         console.log(greet()); // Accessing outer function
//     }

//     return inner;
// }

// const sayHello = outer();
// sayHello(); // Hello




// function outer() {
//     function greet() {
//         return "hello world ";
//     }
//     function inner() {
//         return "is it her " + greet();
//     }
//     return inner;
// }

// const ch = outer();
// console.log(ch()); 




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

function z() {
    var b = 1000;

    function x() {
        var a = 7;

        function y() {
            console.log(a, b); // Accesses both a and b via closure
        }
        a = 2000;
        y();
    }

    x(); // Call x() and return y
    return 2;
}

z();

var c = z();    // c now holds function y?
console.log(c); 
// c();  
            //  Calls y() — prints

// function outer(){
//     let a=10;
//     return function(){
//         console.log(a)
//     }
// }

// const ref=outer();
// ref();