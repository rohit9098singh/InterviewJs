function x(){
    for(var i=1;i<=5;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
    console.log("hello rohit")
}

// x(); // hello rohit 6 6 6 6 6 6 behave this way because closuere remeber the reference of i not the value of i 

// quick way to fix this is to use let insted of var => reson let has a block scope so everytime the loop runs by the tme one is in queue i is a new varible evrytime rach time setTimeOut is called it has a new copy of i 

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
//     console.log("hello rohit")
// }

// x();


// ======== but what if i had to do with var itself ========

// function x(){
//     for(var i=1;i<=5;i++){
//         function close(i){
//             setTimeout(()=>{
//                 console.log(i)
//             },i*1000)
//         }
//         close(i)
//     }
//     console.log("hello rohit")
// }

// x();


// =================== with iffe =================

// function x(){
//     for (var i=1;i<=4;i++){
//         (function y(i){
//             setTimeout(()=>{
//                 console.log(i)
//             },1000*i)
//         })(i)
//     }
// }
// x()

// function outest(){
//     function outerFunction(params){
//         let x=10;
//         function innerFunction(){
//            console.log(x,params)
//         }
//         return innerFunction;
//     }
//     return outerFunction;
// }

// const calling =outest();

// const result=calling("hello");

// result();
// outest()("hello")();

  function add(){
    for(let i=0;i<5;i++){
      setTimeout((i)=>{
        console.log(i)
      },1000*i,i)
     
    }
  }
  add();

  

