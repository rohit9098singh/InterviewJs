// function testScope(){
//     if(true){
//         var a=10;
//         let b=20;
//         const c=30;
//     }

// console.log(a);
// console.log(b);
// console.log(c);
// }

// testScope();

//output => first will give 10 later two will give refrence error 

// =============================== 2 ===========================

for(let i=0;i<5;i++){
    setTimeout(()=>{
         console.log(i)
    },1000)
}

//output => 0 1 2 3 4  

// ============================= 3 ================================

// let x=100;
// function shadowingTest(){
//     let x=200;
//     {
//         let x=300;
//         console.log(x);
//     }
//     console.log(x);

// }

// shadowingTest();
// console.log(x);

// output => 300 200 100


// ============================= 4 ================================
// function outer(){
//     let count =0;
//     return function inner(){
//         count ++;
//         console.log(count)
//     }
// }

// const counter1=outer();
// counter1();
// counter1();
// counter1();

// const counter2=outer();
// counter2();

//output => 1 2 3 1


// ============================= 5 ================================

// var global="Global";
// function outerFunc(){
//     var name="Outer";
//     function innerFunc(){
//       console.log(name)
//     }
//     return innerFunc;
// }

// const fucn=outerFunc();
// fucn();


// output => outer 