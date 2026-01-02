// Functions can be treated like values — assigned to variables, passed as arguments, or returned from other functions.
const say=function (){
    console.log("hello")
}

const greet=say
greet();



//A function that is passed as an argument to another function, and then called ("called back") inside that outer function

function process(callback) {
  console.log("Before callback");
  callback(); // "called back" here
  console.log("After callback");
}

process(function () {
  console.log("I am the callback");
});


// ============================ this value ===============================

const user={
    name:"Rohit",
    age:22,
    greet:function(){
       const arrow= ()=>{
        console.log(`hello ${this.name}`)
    }
    arrow()
    }
}

user.greet();