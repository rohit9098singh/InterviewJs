// What is setImmediate()?
// setImmediate() is a Node.js-only function (not available in browsers) that allows you to execute a callback after the current event loop phase ends — before any timers like setTimeout() with 0ms.

const fs = require("fs");

setTimeout(() => {
  fs.readFile(__filename, () => {
    console.log("file read");
  });
}, 0);

setImmediate(() => {
  console.log("immediate");
});

