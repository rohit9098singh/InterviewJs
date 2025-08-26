const customPromiseAll = (promises) => {
  return new Promise((res, rej) => {
    let result = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = value;
          completed++;
          if (completed === promises.length) {
            res(result);
          }
        })
        .catch((err) => {
          rej(err); // catch me bhi reject karna chahiye
        });
    });
  });
};

// Example 1: All Promises succeed
const p1 = Promise.resolve(1);
const p2 = 42;
const p3 = new Promise((resolve) => setTimeout(() => resolve("done"), 1000));

customPromiseAll([p1, p2, p3])
  .then((values) => {
    console.log("Resolved values:", values); // [1, 42, "done"]
  })
  .catch((err) => {
    console.log("Caught error:", err);
  });
