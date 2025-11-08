
const cart = ["jeans", "tshirt"];

function handleCart(cart) {
  return true;
}

function createOrder(cart) {
  return new Promise((res, rej) => {
    if (!handleCart(cart)) {
      const err = new Error("cart is not valid here");
      rej(err);
    } else {
      const orderId = 123;
      res(`order created successfully with order id: ${orderId}`);
    }
  });
}

const handledOutput = createOrder(cart);

handledOutput
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

