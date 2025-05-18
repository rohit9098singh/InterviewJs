function mergeArray(arr1, arr2) {
  const outputArray = {};
  for (const obj1 of arr1) {
    outputArray[obj1.id] = { ...obj1 };
  }

  for(obj2 of arr2){
    if(outputArray[obj2.id]){
        outputArray[obj2.id]={...outputArray[obj2.id],...obj2}
    }
    else{
        outputArray[obj2.id]
    }
  }
  return Object.values(outputArray)
}

const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const arr2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Charlie" },
];

const result = mergeArray(arr1, arr2);
console.log(result);
