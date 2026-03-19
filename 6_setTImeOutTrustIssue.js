console.log("hello world");

setTimeout(function sayHello() {
  console.log("hello");
}, 1000)


  // webapi // callback // even loop // callstack
let startDate=new Date().getTime();

let endDate=startDate;

while(endDate <=startDate+10000){
    endDate=new Date().getTime();
}




// function delay(ms) {
//   const start = Date.now(); // current time
//   while (Date.now() - start < ms) {
//     // loop chalega until ms time passes
//   }
// }

// console.log("Start");
// delay(2000);  // 2 sec delay
// console.log("End after 2 sec");


