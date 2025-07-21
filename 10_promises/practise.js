const cart = ["jeans", "pant", "table"];

const handledOutput = createOrder(cart);

handledOutput
  .then((orderId) => {
    console.log("order Created successfully", orderId);
    // proceedToPay(orderId)
  })
  .catch((error) => {
    console.log("validation failed :", error.message);
  });

function validateCart() {
  return true;
}

function createOrder(cart) {
  const promise = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("cart not valid");
      reject(err); // ❌ validation failed
    }

    const orderId = "12345"; // ✅ mock order id
    resolve(orderId);        // ✅ resolve the promise
  });

  return promise;
}
