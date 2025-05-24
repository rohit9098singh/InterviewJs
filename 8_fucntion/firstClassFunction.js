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




