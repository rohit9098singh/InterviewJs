// Promise.resolve(10)
//   .then((num) => num + 5)
//   .then((num) => Promise.resolve(num * 2))
//   .then(console.log);
// ============================================
// Promise.resolve()
//   .then(() => {
//     throw new Error("Boom");
//   })
//   .then(() => console.log("Next"))
//   .catch((e) => console.log("Caught:", e.message));
// ==============================================
// let p = Promise.resolve("X");
// p.then((val) => console.log("A:", val));
// p.then((val) => console.log("B:", val));
// ===============================================

// Promise.reject("fail")
//   .catch((e) => {
//     console.log("Caught 1");
//     throw e;
//   })
//   .catch((e) => {
//     console.log("Caught 2");
//   });
//================================================

//   async function test() {
//   return 42;
// }
// test().then(console.log);

//================================================

// async function go() {
//   console.log("Start");
//   await new Promise((res) => setTimeout(res, 0));
//   console.log("After timeout");
// }
// go();
// console.log("Outside");

//===============================================
// Promise.resolve("Start")
//   .then(() => {
//     return new Error("Oops");
//   })
//   .then((res) => console.log("Then:yaha aata ", res))
//   .catch((e) => console.log("Catch:", e));

//==============================================
// Promise.resolve("done")
//   .finally(() => "ignored")
//   .then(console.log);

//   .finally() is meant for cleanup.
// The return value of finally is ignored. It does not affect the promise chain's value.

//==============================================
// let p = new Promise((res, rej) => {
//   setTimeout(() => rej("timeout"), 1000);
// });
// p.catch(console.log);
// Initial state: pending
// After 1 second: rejected with reason "timeout"

//============================================
// Promise.resolve()
//   .then(async () => {
//     return 5;
//   })
//   .then(console.log);
//============================================

  // Promise.resolve(10)
  // .then((res) => {
  //   res + 10;
  // })
  // .then((res) => console.log(res));

//============================================

async function test() {
  try {
    await Promise.reject("Fail");
  } catch (e) {
    console.log("Caught:", e);
  }
}
test();


//============================================

Promise.all([
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3),
])
  .then((res) => console.log("Then:", res))
  .catch((e) => console.log("Catch:", e));

//============================================

  Promise.resolve(5)
  .then((num) => {
    return new Promise((res) => {
      setTimeout(() => res(num * 2), 5000);
    });
  })
  .then(console.log);
