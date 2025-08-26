function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // primitive value return as it is
  }

  // Agar array hai to map() use karo
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  // Agar object hai to for..in use karo
  const newObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] = deepClone(obj[key]);
    }
  }
  return newObject;
}

// Example
const data = {
  name: "Rohit",
  skills: ["JS", "C++", { lang: "Python" }]
};

const copy = deepClone(data);
console.log(copy);
console.log(copy.skills[2] === data.skills[2]); // false (different reference)
