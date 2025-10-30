// {
//   /**
//     When boilWater() is called, it returns a Promise object immediately.
//     The Promise constructor runs its executor   function: (resolve) => { ... }

//     Inside the executor, setTimeout is registered to run after 1000ms (1 second).
//     This timer is handled by the browser's Web APIs (or libuv in Node.js).

//     Meanwhile, JavaScript continues executing other code (non-blocking)
//     After 1000ms, the callback inside setTimeout (console.log("boil"), resolve()) is placed in the callback queue

//     When the call stack is clear, the event loop pushes the callback onto the call stack.

//     console.log("boil") runs.

//     Then resolve() is called — this tells the Promise: "we’re done".

//     The Promise transitions from pending to fulfilled.

//     Any .then() handlers attached to boilWater() will now execute
//     **/
// }

function boilWater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. Water boiled");
      resolve();
    }, 4000);
  });
}

function addTeaLeaves() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. Tea leaves added");
      resolve();
    }, 1000);
  });
}

function addMilk() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. Milk added");
      resolve();
    }, 1000);
  });
}

function serveTea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("4. Tea is served ☕");
      resolve();
    }, 1000);
  });
}

// // 🔗 Chaining Promises
boilWater()
  .then(() => addTeaLeaves())
  .then(() => addMilk())
  .then(() => serveTea())
  .catch((err) => {
    console.error("Something went wrong:", err);
  });


const val = async function () {
  await boilWater();
  await addTeaLeaves();
  await addMilk();
  await serveTea();
};
val();



