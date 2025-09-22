// const cart = ["jeans", "pant", "table"];

// const handledOutput = createOrder(cart);

// handledOutput
//   .then((orderId) => {
//     console.log("order Created successfully", orderId);
//     // proceedToPay(orderId)
//   })
//   .catch((error) => {
//     console.log("validation failed :", error.message);
//   });

// function validateCart() {
//   return true;
// }

// function createOrder(cart) {
//   const promise = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const err = new Error("cart not valid");
//       reject(err); // ❌ validation failed
//     }

//     const orderId = "12345"; // ✅ mock order id
//     resolve(orderId);        // ✅ resolve the promise
//   });

//   return promise;
// }

// const cart = ["jeans", "pant", "table"];

// const validateCart = (cart) => {
//   return true;
// };

// const createOrder = (cart) => {
//   return new Promise((res, rej) => {
//     if (!validateCart(cart)) {
//       const err = new Error("cart value is not valid");
//       rej(err);
//     } else {
//       const orderId = 124;
//       res(orderId);
//     }
//   });
// };

// const handledOutput = createOrder(cart);

// handledOutput
//   .then((res) => console.log("order created successfully", res))
//   .catch((err) => {
//     console.log("error", err);
//   });

const cart=["jeans","thsirt"];

function handleCart(cart){
   return true;
}
function createOrder(cart){
  return new Promise((res,rej)=>{
      if(!handleCart(cart)){
        const err=new Error("cart is not valid at here ");
        rej(err);
      }
      else{
        const orderId=123;
        res("order create successfully with the order id :",orderId);
      }
  })
}
const handledOutput=createOrder(cart);

handledOutput.then((res)=>console.log(res)).catch((err)=>{
  console.log(err)
})
