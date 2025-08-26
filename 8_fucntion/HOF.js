// A callback is a function that is passed as an argument to another function and is executed later, usually after some task or event.
// 👉 Callback ka main purpose hota hai: "Hey, after you finish your job, call this function!"

setTimeout(function () {
  console.log("This is a callback");
}, 1000);




// A function is called a Higher-Order Function if it does either of the following:
// Takes a function as an argument ✅
// Returns a  ✅
// 🔸 Doing even one of these is functionenough to be called a higher-order function.

// 2nd example when it return the fucntion
function sayHello() {
  return function bye() {
    console.log("get lost")
  }
}

const innerFuncRef = sayHello();

innerFuncRef();

// 2nd when takes a fucntion as an arguent
const arr = [1, 2, 3];

const newArr = arr.map(function (num) {
  return num * 2;
});

console.log(newArr); // [2, 4, 6]


