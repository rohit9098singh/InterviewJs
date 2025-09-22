// What is setImmediate()?
// setImmediate() is a Node.js-only function (not available in browsers) that allows you to execute a callback after the current event loop phase ends — before any timers like setTimeout() with 0ms.

const greatHello=()=>{
  console.log("hello world");
}

setTimeout(()=>{
  greatHello();
},3000)

setImmediate(()=>{
  console.log("immediate fucntion");
},4000)