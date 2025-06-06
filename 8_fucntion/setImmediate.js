const fs = require("fs");

setTimeout(() => {
  fs.readFile(__filename, () => {
    console.log("file read");
  });
}, 0);

setImmediate(() => {
  console.log("immediate");
});
