function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let completed = 0;

    if (promises.length === 0) {
      resolve([]); // handle empty array
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((val) => {
          result[index] = val;
          completed++;
          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch(reject); // reject the entire promise if any one fails
    });
  });
}

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

// Example 2: One Promise fails
const p4 = Promise.reject("error");

customPromiseAll([p1, p4, p3])
  .then((values) => {
    console.log("This will not run");
  })
  .catch((err) => {
    console.log("Caught error:", err); // "error"
  });
