function a(){
    b();
   function b(){
    c();
     function c(){
       console.log("value ",x)
     }
   }
}
var x=10;
a();

// function a(){
//     b();
//    function b(){
//     c();
//      function c(){
//        console.log("value ",x)
//      }
//    }
// }
// a();
// var x=10;


// function a(){
//     b();
//    function b(){
//     c();
//      function c(){
//        console.log("value ",x)
//      }
//    }
// }
// let x=10;
// a();  // even though they ar not maintained in the global execution context still they are exccesible at the global scope that is why c has the access to it 

// function a(){
//     b();
//    function b(){
//     c();
//      function c(){
//        console.log("value ",x)
//      }
//    }
// }

// a();
// let x=10;

// 

// function a(){
//    function b(){
//      function c(){
//        console.log("value ",x)
//      }
//    }
// }

// var x=10;
// a();


// let a=20;

//  function b (){
//     a=40;
//     console.log(a);
// }
// b()
// console.log(a)

