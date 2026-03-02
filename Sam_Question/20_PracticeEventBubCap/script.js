document.querySelector("#grandparent")
  .addEventListener("click", () => {
    console.log("Grandparent Clicked");
  }, true); // ✅ bubbling

document.querySelector("#parent")
  .addEventListener("click", () => {
    console.log("Parent Clicked");
  }, true); // ✅ bubbling

document.querySelector("#child")
  .addEventListener("click", () => {
    console.log("Child Clicked");
  }, true); // ✅ bubbling


