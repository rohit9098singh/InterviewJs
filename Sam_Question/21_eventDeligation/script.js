// Event Delegation is a technique in JavaScript where you delegate an event listener to a parent element, and handle events that occur on its child elements — using event bubbling.
//  Better performance — you attach 1 listener instead of 100s
// ✅ Works even for dynamically added elements
// ✅ Clean, scalable code




document.getElementById("menu").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

