// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj; // primitive value return as it is
//   }

//   // Agar array hai to map() use karo
//   if (Array.isArray(obj)) {
//     return obj.map(item => deepClone(item));
//   }

//   // Agar object hai to for..in use karo
//   const newObject = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObject[key] = deepClone(obj[key]);
//     }
//   }
//   return newObject;
// }

// // Example
// const data = {
//   name: "Rohit",
//   skills: ["JS", "C++", { lang: "Python" }]
// };

// const copy = deepClone(data);
// console.log(copy);
// console.log(copy.skills[2] === data.skills[2]); // false (different reference)


const customDeepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => customDeepClone(item));
  }

  let newObj = {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = customDeepClone(obj[key]);
    }
  }
  return newObj;
};


const data={
  name:'Rohit',
  skills:["js","c++",{lang:"Python"}]
}

const copy=customDeepClone(data);
console.log("check what are we getting at here ",copy.skills[2].lang="herool")
console.log(copy)
console.log(data)