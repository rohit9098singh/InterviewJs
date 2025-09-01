// setTimeout(() => console.log("fifth"), 0);
// console.log("first 1");
// new Promise(res => {
//  console.log("second")
//  res();
// }).then(() => console.log("fourth"));
// console.log("third");

// async function foo() {
//  console.log("second","A");
//  await Promise.resolve();
//  console.log("fouth","B");
//  await new Promise(resolve => setTimeout(resolve,  0));
//  console.log("fifth","C");
// }
// console.log("first","D");   
// foo();
// console.log("third",  "E")

// let c=0;
// let id = setInterval(() => {
// console.log(c++)
// },10)
// setTimeout(() => {
// clearInterval(id)
// },2000)

// function getName1(){
// console.log(this.name);
// }
// Object.prototype.getName2 = () =>{
// console.log(this.name)
// }
// let personObj = {
// name:"Tony",
// print:getName1
// }
// personObj.print();
// personObj.getName2();

// function getName1(){
// console.log(this.name);
// }
// Object.prototype.getName2 = () =>{
//  console.log(Object.getPrototypeOf(this).name);
// }
// let personObj = {
// name:"Tony",
// print:getName1
// }
// personObj.print();
// Object.prototype.name="Steve";

// function test() {
//  console.log(a);
//  console.log(foo());
//  var a = 1;
//  function foo() {
//  return 2;
//  }
// }
// test();

// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);


var x = 23;
(function () {
  var x = 43;
  (function random() {
    x++;
    console.log(x);
    var x = 21;
  })();
})();
 
// console.log(undefined++)

// var x=23;
// function add(){
//   let a=23;
//   return function inner(){
//       let c=20;
//       console.log(c)
//   }
// }