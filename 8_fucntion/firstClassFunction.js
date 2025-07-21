// const sayHello=function (){
//     console.log("hello")
// }


function greet(cb){
   cb();
}

function cb(){
    console.log("helo buddy")
}

greet(cb);






// first class fucntion are the fucntion that are treated as any other varibles we can pass it to a ducntion as a an argiment we can retuen it from the fucntion asin it an other valrible and store them in data structure like array or objects

const cb = () => {
    console.log("hello buddy here i am ");
}

function hello(cb) {
    return cb; // just return the function reference
}


const cbRef = hello(cb); 
cbRef(); 

const a =function(){
    console.log("hello world ");
}

a();

function hello(){
    let a=10;
    function b(){
        console.log(a);
    }
    return b;
}

const bRef=hello();
bRef();

const sayHello = () => console.log("Hello");
const sayHi = () => console.log("Hi");
const sayBye = () => console.log("Bye");

const greetings = [sayHello, sayHi, sayBye];

greetings[0](); // Hello
greetings[1](); // Hi
greetings[2](); // Bye

// Real life usecase to check the authMiddleware

// middleware.js
// function authMiddleware(role) {
//     return function (req, res, next) {
//         if (req.user && req.user.role === role) {
//             next(); // allowed
//         } else {
//             res.status(403).send("Forbidden");
//         }
//     };
// }

// // app.js
// const express = require("express");
// const app = express();
// const authMiddleware = require("./middleware");

// // Using returned function from `authMiddleware` (closure + first-class function)
// app.get("/admin", authMiddleware("admin"), (req, res) => {
//     res.send("Welcome admin!");
// });


const hello=function bye(){
    console.log("hello")
}