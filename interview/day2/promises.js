setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// in js promise cannot be resoved twice Once a Promise is settled its state is immutable — it cannot be changed again.

const promise = new Promise((resolve, reject) => {
  resolve("First resolve");
  resolve("Second resolve"); // Ignored
  reject("This reject is also ignored"); // Ignored
});

promise.then((value) => {
  console.log(value); // Output: "First resolve"
});


async function a() {
  console.log(1);
  await null;
  console.log(2);
}
a();
console.log(3);
