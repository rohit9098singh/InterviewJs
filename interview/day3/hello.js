// setTimeout(() => console.log("fifth",1), 0);
// console.log("first",2);
// new Promise(res => {
//  console.log("third",3)
//  res();
// }).then(() => console.log("fourth",4));
// console.log("second",5);

async function foo() {
 console.log("second","A");
 await Promise.resolve();
 console.log("fouth","B");
 await new Promise(resolve => setTimeout(resolve, 0));
 console.log("fifth","C");
}
console.log("first","D");
foo();
console.log("third","E")
