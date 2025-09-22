console.log("hello world");

setTimeout(sayHello,5000)

function sayHello(){
    console.log("hello");
}

let startDate=new Date().getTime();

let endDate=startDate;

while(endDate <=startDate+10000){
    endDate=new Date().getTime();
}

console.log(" i am expeting a package of 8 lpah")



function delay(ms) {
  const start = Date.now(); // current time
  while (Date.now() - start < ms) {
    // loop chalega until ms time passes
  }
}

console.log("Start");
delay(2000);  // 2 sec delay
console.log("End after 2 sec");


