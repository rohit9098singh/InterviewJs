const users = [
  { id: 1, name: "rohit" },
  { id: 2, name: "amit" },
  { id: 3, name: "sumit" }
];

const result = users.find((user) => {
  return   user.id === 2;   // <-- look carefully 👀
});

console.log(result);



const arr2 = [10, 20, 30, NaN];
console.log(arr2.find(x => x === NaN));  // this becoems undefined because nan is the only value in js that is not equal to itself
arr2.find(x => Number.isNaN(x)); 

// const obj1 = { id: 1 };
// const obj2 = { id: 2 };
// const obj3 = { id: 3 };

// const arr = [obj1, obj2, obj3];

// const result2 = arr.find(item => item === { id: 2 });

// console.log("is this what i am checking",result2);

// undefined when js doesnot find aything or return value is false inside the find returns undefined