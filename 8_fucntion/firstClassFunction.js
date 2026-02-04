
// first class fucntion are the fucntion that are treated as any other varibles 
// we can pass it to a fucntion as a an argiment 
// we can retuen it from the fucntion 
// asin it an other valrible
//  and store them in data structure like array or objects

// 1) passing as an argument 
const cb = () => {
    console.log("hello buddy here i am ");
}

function hello(cb) {
    return cb; 
}

const cbRef = hello(cb); 
cbRef(); 


// //2) assigning it to some other variable 
const a =function(){
    console.log("hello world ");
}
a();

// //3) returned from another fucntion
function hello(){
    let a=10;
    function b(){
        console.log(a);
    }
    return b;
}

const bRef=hello();
bRef();


// //4) store then in data structure called array
const sayHello = () => console.log("Hello");
const sayHi = () => console.log("Hi");
const sayBye = () => console.log("Bye");

const greetings = [sayHello, sayHi, sayBye];

greetings[0](); // Hello
greetings[1](); // Hi
greetings[2](); // Bye


function base(a){
    return function (b){
        return a*b;
    }
}

function cb2(){
  console.log("hello wrold ")
}
function base(cb2){
   cb2()
}

base(cb2);
