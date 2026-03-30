// 1st point => normal fucntion jo hai uska this call time pe na ke definitaion time pe
// 2nd pont=> arrow functuin khud ka this nhi hota islie vo creation time pe parent se inherit kar leta hai 

// - In global scope (browser), this refers to window (except in modules).
// - In a regular function:
//   - Non-strict → this = window
//   - Strict → this = undefined
// - In an object method, this refers to the object calling the method.
// - Arrow functions do not have their own this; they inherit it from the surrounding scope.

const obj1 = {
  name: 'Rohit',
  greet: function() {
    console.log("greet this:", this); // ✅ obj

    setTimeout(function() {
      console.log("setTimeout this:", this); // ❌ global / undefined

      function inner() {
        console.log("inner this:", this); // ❌ global / undefined
        console.log("inner name:", this.name); // ❌ undefined
      }

      inner();
    }, 1000);
  }
};

obj1.greet();

// ❌ Output:
//               greet this: obj
//               setTimeout this: window / undefined
//               inner this: window / undefined
//               inner name: undefined


const obj = {
  name: 'Rohit',
  greet: function() {
    console.log("greet this:", this); //  obj

    setTimeout(() => {
      console.log("setTimeout this:", this); //  obj

      const inner = () => {
        console.log("inner this:", this); //  obj
        console.log("inner name:", this.name); //  Rohit
      }

      inner();
    }, 1000);
  }
};

obj.greet();

// ✅ Output:   greet this: obj
//              setTimeout this: obj
//              inner this: obj
//              inner name: Rohit




// Normal function (in setTimeout)

// this decide hota hai execution time par → default/global/undefined milta hai.

// 🟢 Arrow function (in setTimeout)
// this decide hota hai creation time par → surrounding scope ka this capture karke lock kar leta hai


console.log(null == undefined)