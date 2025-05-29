
// for(let i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000 *i)
// }


// console.log('1 Start'); //1

// const promise = new Promise((resolve) => {
//   console.log('2 Inside Promise'); //3
//   resolve('Resolved Value');
// });

// promise.then((val) => console.log("4",val)); //4

// console.log('3 End'); //2 


setTimeout(() => console.log('Timeout 1'), 0);  // 3

Promise.resolve()
  .then(() => {
    setTimeout(() => console.log('Timeout 2'), 0); // 4
    console.log('Promise 1');  // 1
  })
  .then(() => console.log('Promise 2')); // 2

setTimeout(() => console.log('Timeout 3'), 0); // 5