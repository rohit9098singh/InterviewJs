// console.log(rohit());

// var rohit=function(){
//     return "hello world";
// }

// function rohit(){
//     return "hello from fucntion below "
// }

// output => hello from fucntion inside 


// ================================== 2 ==========================

// console.log(x);
// let x=10;

//output => refrence error  cannot access x before initialization

// ================================== 3 ============================

// var x=3;

// var fun=function(){
//     console.log(x);
//     var x=20;
// }

// fun();

// output => undefined ;


// ================================== 4 ============================

var a =1;

function test(){
  console.log("check it",a);
  var a =2;
}

test();

// undefined still 

// ========================== 5 =============================
function outer(){
    console.log( inner());
    function inner(){
        return " i am inner"
    }
}

outer();

// output => inner 


