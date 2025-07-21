function a(){

    let x=10;
    b();
   function b(){
    c();
     function c(){
       console.log("value ",x)
     }
   }
}

a();