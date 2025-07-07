function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // primitive value, return as it is
  }

  // If it's an array, create a new array and clone each item
  if (Array.isArray(obj)) {
    const newArray = [];
    for (let item of obj) {
      newArray.push(deepClone(item)); // recursive call for nested arrays/objects
    }
    return newArray;
  }

  // If it's an object, create a new object and clone each key
  const newObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] = deepClone(obj[key]); 
    }
  }
  return newObject;
}

const original = {
  name: "Rohit Singh",
  scores: [10, 20],
  meta: { passed: true, date: "2023-11-29" }
};

const cloned = deepClone(original);

// Changes in clone
cloned.name = "Hello";
cloned.scores[0] = 99;
cloned.meta.passed = false;

// Original should remain safe
console.log(original.name);        // "Rohit Singh"
console.log(original.scores[0]);   // 10
console.log(original.meta.passed); // true
