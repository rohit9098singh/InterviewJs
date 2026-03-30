
// const cart = ["jeans", "tshirt"];

// function handleCart(cart) {
//   return true;
// }

// function createOrder(cart) {
//   return new Promise((res, rej) => {
//     if (!handleCart(cart)) {
//       const err = new Error("cart is not valid here");
//       rej(err);
//     } else {
//       const orderId = 123;
//       res(`order created successfully with order id: ${orderId}`);
//     }
//   });
// }

// const handledOutput = createOrder(cart);

// handledOutput
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));


// what is the problem at here with respect to the output 
console.log('1 Start'); 

const promise = new Promise((resolve) => {
  console.log('2 Inside Promise'); 
  resolve('Resolved Value');
});

promise.then((val) => console.log("4",val)); 

console.log('3 End'); //2 


setTimeout(() => console.log('Timeout 1'), 0);  

Promise.resolve()
  .then(() => {
    setTimeout(() => console.log('Timeout 2'), 0); 
    console.log('Promise 1');  // 1
  })
  .then(() => console.log('Promise 2')); 

setTimeout(() => console.log('Timeout 3'), 0); 