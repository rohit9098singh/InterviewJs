const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve(" Promise resolved!");
  } else {
    reject(" Promise rejected!");
  }
});

myPromise.then((result) => {
    console.log(result)})
  .catch((error) => {
    console.log(error);   
  });