import { waitForDebugger } from "inspector";

const MyPromise = new Promise((res, rej) => {
  document.getElementById("btn").addEventListener("click", () => {
    res("✅ Resolved");
  });

  document.getElementById("btn2").addEventListener("click", () => {
    rej("❌ Rejected");
  });
});

async function myPromiseFunction() {
  try {
    const result = await MyPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
myPromiseFunction();

MyPromise.then((res) => {
  console.log(res);
}).catch((err) => console.log(err));

//==============================================================

document.getElementById("btn").addEventListener("click", () => {
  const promise = new Promise((res, rej) => {
    res("✅ Button 1 Resolved");
  });

  promise.then((result) => console.log(result));
});

document.getElementById("btn2").addEventListener("click", () => {
  const promise = new Promise((res, rej) => {
    rej("❌ Button 2 Rejected");
  });

  promise.catch((err) => console.log(err));
});


