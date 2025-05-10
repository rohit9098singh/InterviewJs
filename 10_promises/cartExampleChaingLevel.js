const cart = ["jeans", "shirt", "trouser"];

const promise = createOrder(cart);
console.log(promise);

promise
  .then((orderId) => {
    console.log("Order created successfully! Order ID:", orderId);
    return orderId; // so that ye neeche walle chain me availble aacha practice hai aisa karna 
  })
  .then((orderId) => {
    return handleProceedToPayment(orderId); // waht ever response of this we will handle in next chain we return because it gives only a mesage neeche se right
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((error) => {
    console.log("Checkout failed:", error.message);
  });

function validateCart(cart) {
  // To trigger error: return false;
  // To resolve successfully: return true;
  return false;  // ye to hame directly cart is not valid pe le jara hai but what if mujhe proccedtopayment ke pas jana tha bina cart ke validation chek ke  kuck karna nhi hai catch ke utha kar ke creteorder ke neeche fek de taki vo bas vahi tak error valdate kare 
}

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const error = new Error("Cart is not valid");
      reject(error);
      return;
    }

    const orderId = "12345";
    setTimeout(() => {
      resolve(orderId);
    }, 4000);
  });
}

function handleProceedToPayment(orderId) {
  return new Promise((resolve) => {
    resolve("payment successful");
  });
}


