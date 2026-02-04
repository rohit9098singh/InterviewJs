// console.log("1st Start");  

// setTimeout(() => {
//   console.log(" 4th Inside Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3d Inside Promise");
// });

// console.log("2nd End");

//: Given the following function, identify any bugs or issues in it, and explain how to fix it:

function processData(data) {
  try {
    const result = JSON.parse(data);
    if (result.error) {
      throw new Error(result.error);
    }
    return result;
  } catch (e) {
    console.error("Error parsing data", e);
    return null;
  }
}


// If result.error exists but is falsy (like an empty string "" or 0), your check:

// if (result.error) {
//   throw new Error(result.error);
// }
// won't catch it because if (result.error) checks for truthiness

// if (result.hasOwnProperty("error")) {
//   throw new Error(result.error);
// }


var a=10;

function foo(){
  console.log("observe",a)
  var a=20;
}
foo();

