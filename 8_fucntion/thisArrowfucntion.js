// const obj = {
//   name: 'Rohit',
//   greet: function() {
//     console.log("greet this:", this); // ✅ obj

//     setTimeout(function() {
//       console.log("setTimeout this:", this); // ❌ global / undefined

//       function inner() {
//         console.log("inner this:", this); // ❌ global / undefined
//         console.log("inner name:", this.name); // ❌ undefined
//       }

//       inner();
//     }, 1000);
//   }
// };

// obj.greet();

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