function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clonedObj = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

// const original={a:1,b:{c:2},d:[3,4]};
const original = [1, 2, 3];
const cloned = deepClone(original);
console.log(cloned);
console.log(cloned !== original);
console.log(cloned.b !== original.b);
console.log(cloned.d !== original.d);

{
  /**
   * const obj = {
     name: "Rohit",
    nested: {
        age: 25
    }
    };
    clonedObj["name"] = deepClone("Rohit"); // returns "Rohit"

    clonedObj["nested"] = deepClone({ age: 25 }); 
    // Ye firse ek naya object banayega: { age: 25 }
    {
    name: "Rohit",
    nested: { age: 25 }
    }
*/
}
