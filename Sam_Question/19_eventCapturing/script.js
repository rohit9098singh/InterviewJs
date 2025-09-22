// this is for event capturing
document.getElementById("outer").addEventListener("click", function () {
  console.log("Outer Div Clicked");
}, true); // 👈 capturing

document.getElementById("inner").addEventListener("click", function () {
  console.log("Inner Div Clicked");
}, true); // 👈 capturing

document.getElementById("btn").addEventListener("click", function () {
  console.log("Button Clicked");
}, true); // 👈 capturing



// this is for evnt bubbling
document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer div cliked")
}, false)
document.getElementById("inner").addEventListener("click", () => {
  console.log("inner div cliked")
}, false)
document.getElementById("btn").addEventListener("click", () => {
  console.log("btn cliekd div cliked")
}, false)

// output :  Outer Div Clicked
//             Inner Div Clicked
//             Button Clicked
