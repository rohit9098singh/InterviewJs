function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // primitive value, return as it is
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)); 
  }

  const newObject = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObject[key] = deepClone(obj[key]);
    }
  }
  return newObject;
}


const original = [1, 2, [3, 4]];

const copy = deepClone(original);

copy[0] = 99;           
copy[2][1] = 100;       

console.log("Original:", original);
console.log("Copy:", copy);


function deepClone(obj){
  if(obj===null && typeof obj !==Object){
    return obj;
  }
  if(Array.isArray(obj)){
    return obj.map((item)=>deepClone(item));
  }

  const newObj={};
  for(let key in obj){
      if(obj.hasOwnProperty(key)){
          newObj[key]=deepClone(obj[key]);
      }
  }
  return newObj;
}



