 document.getElementById("outer").addEventListener("click", function () {
    console.log("Outer Div Clicked");
  }, true); // 👈 capturing

  document.getElementById("inner").addEventListener("click", function () {
    console.log("Inner Div Clicked");
  }, true); // 👈 capturing

  document.getElementById("btn").addEventListener("click", function () {
    console.log("Button Clicked");
  }, true); // 👈 capturing

  // output :  Outer Div Clicked
  //             Inner Div Clicked
  //             Button Clicked
