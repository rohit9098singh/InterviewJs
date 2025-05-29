let i = 0;

const timer = setInterval(() => {
  console.log("Hello", ++i);

  if (i === 3) {
    clearInterval(timer); // Stop after 3 times
    console.log("Stopped!");
  }
}, 1000);




