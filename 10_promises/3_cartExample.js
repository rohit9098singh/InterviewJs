const cart = ["jeans", "shirt", "trouser"];

const promise = createOrder(cart);
console.log(promise);

promise
  .then((orderId) => {
    console.log("Order created successfully! Order ID:", orderId);
  })
  .catch((error) => {
    console.log(" Checkout failed:", error.message);  
  });

function validateCart(cart) {
  // To trigger error: return false;
  // To resolve successfully: return true;
  return false;
}

function createOrder(cart) {
  const pro = new Promise((resolve, reject) => {
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

  return pro;
}

