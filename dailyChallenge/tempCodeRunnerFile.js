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