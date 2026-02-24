const arr=[1,2,[3,4]]

const shallowCopy=[...arr];

shallowCopy[2][0]=100;

console.log(arr);
console.log(shallowCopy)

const deepCopy=structuredClone(arr);
deepCopy[2][0]=200;

console.log("deep-cloned",deepCopy)

// // or

const deepCopy2=JSON.parse(JSON.stringify(arr));
deepCopy2[2][1]=393939;

console.log(arr)
console.log(deepCopy)
console.log(deepCopy2)

// // range error

// const array=new Array(-5)

// function boilWater(cb) {
//   setTimeout(() => {
//     console.log("first boil the water");
//     cb();
//   }, 1000);
// }
// function addTeaLeaves(cb) {
//   setTimeout(() => {
//     console.log("second add tea leaves in the water");
//     cb();
//   }, 1000);
// }
// function addMilk(cb) {
//   setTimeout(() => {
//     console.log("third boil the water");
//     cb();
//   }, 1000);
// }
// function serve() {
//   setTimeout(() => {
//     console.log("first boil the water");
//   }, 1000);
// }

// boilWater(() => {
//   addTeaLeaves(() => {
//     addMilk(() => serve());
//   });
// });

// function boilWater() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("first");
//       res();
//     }, 4000);
//   });
// }
// function addTeaLeaves() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("secomd");
//       res();
//     }, 4000);
//   });
// }
// function addMilk() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("third");
//       res();
//     }, 4000);
//   });
// }

// boilWater()
//   .then(() => {
//     addTeaLeaves();
//   })
//   .then(() => {
//     addMilk();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function x() {
//   for (let i = 0; i < 5; i++) {
//     (function close() {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000 * i);
//     })(i);
//   }
// }
// x();
