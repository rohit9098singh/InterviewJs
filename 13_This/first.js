"use strict"

//======================== this in global space=====================
console.log(this) //==> global object = window,global

//======================= this inside a function =========================
function x(){
    console.log(this)
}
x()// => undefined when in strict mode  non-strict walle me vo window hoga kyu us waqt this substitution follow hoga or vo global object se replace hojayega thik 
window.x()  // global window object

//=========================== inside the object =============================

const obj={
    a:10,
    x:function(){
        console.log(this)
    }
}
obj.x();  // the value this in object becomes the object itself inside which it is getting called at there 

// ================================= call apply and bind method ===================================

//1) generally used when we have to share methods 

let printName=function(){
     console.log(this.name)
}

const student={
    name:"Rohit",
    
}
printName.call(student);

const student2={
    name:"deepika"
}
printName.call(student2)

//========================  with arrow fucntion ==========================
// we have to wrap inside another fucntion because arrow functions do not have their own this context. Instead, they inherit this from their lexical scope (i.e., where the function is defined).
  function wrapper() {
    let printName = () => {
        console.log(this.name);
    };
    printName();
}

const user1 = {
    name: "Rohit"
};

const user2 = {
    name: "Deepika"
};

wrapper.call(user1);   // Output: Rohit
wrapper.call(user2);  // Output: Deepika
