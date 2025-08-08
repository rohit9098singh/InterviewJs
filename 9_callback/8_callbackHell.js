// Callback Hell is a situation in JavaScript where multiple
//  nested callbacks make code hard to read, difficult to debug, and unmaintainable.

// It usually happens when asynchronous operations are chained one after
// another using callbacks — resulting in a pyramid or Christmas tree-like structure

function boilWater(callback) {
  setTimeout(() => {
    console.log("1. Water boiled");
    callback();
  }, 4000);
}

function addTeaLeaves(callback) {
  setTimeout(() => {
    console.log("2. Tea leaves added");
    callback();
  }, 1000);
}

function addMilk(callback) {
  setTimeout(() => {
    console.log("3. Milk added");
    callback();
  }, 1000);
}

function serveTea() {
  setTimeout(() => {
    console.log("4. Tea is served ☕");
  }, 1000);
}

// 🔥 Callback hell starts here
boilWater(() => {
  addTeaLeaves(() => {
    addMilk(() => {
      serveTea();
    });
  });
});

// Each step depends on the previous one, so we nest one callback inside another. It’s fine for 2–3 steps, but imagine 10 steps… it becomes a nightmare

// also when the structure becoemes to long it is called as pyrimid of dom

// we loose control over the code in this which is aslo callled as inversion of control becasue we are giving the boil water api to call the addtoleaves api and vice versa but what if any junior developer had return it there may be lot of bugs in it and may not somehimes result in proper calling of the callback inside it

// what if ke ek callback 2 bar call hojae hame nhi paa ke boil water api ke andar me kya code likha hua hai right


