function step1(cb) {
  setTimeout(() => {
    console.log("Step 1");
    cb();
  }, 500);
}

function step2(cb) {
  setTimeout(() => {
    console.log("Step 2");
    cb();
  }, 500);
}

function step3(cb) {
  setTimeout(() => {
    console.log("Step 3");
    cb();
  }, 500);
}

function step4(cb) {
  setTimeout(() => {
    console.log("Step 4");
    cb();
  }, 500);
}


step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        console.log("All steps done!");
      });
    });
  });
});
