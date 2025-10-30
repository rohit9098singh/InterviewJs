//6 Write a function that takes a string as input and determines if it is longer than 5 characters.

// function takeString(str){
//      if(str.length>5) return true;
//      return false
// }

// console.log(takeString("helloworld"));


// 7 Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

function restOperator(obj, ...args) {
  console.log("check the values at here ",args)
    const res = args.reduce((acc, curr) => ({ ...acc, ...curr }), { ...obj });
    console.log("resultant",res);
}


restOperator(
  { name: "rohit", age: 16 },
  { name: "abhishek", age: 12 },
  { city: "Delhi" },
  {language:"bangoli"}
);


// merge two array

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const res={...obj1,...obj2};
console.log(res);

// Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

const getFirstTwo = (arr) => {
    const [first, second] = arr;
    return { first:first, second:second };
}

console.log("i guess so we have a different output at here ",getFirstTwo([1, 2, 3, 4]));


//Write a function that takes an array and returns the sum of first and last element.

const sumFirstAndLast=(arr)=>{
    return  arr[0] + arr[arr.length-1];
}

console.log("sum of first last",sumFirstAndLast([1,2,3,4,5,6,7,8]))

//Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

const test=(arr)=>{
      const newValue=arr.filter((num)=>(num%2===0 && num%5===0));
      return newValue
      
}
console.log("see result",test([10,20,30,40,25,28]));



//12-Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

 const lastQuestion=(arr)=>{
       const fiteredData=arr.filter((values)=>(
            values.salary >22000 && values.age >25
       ))
       return fiteredData;
 }

const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
];

console.log(lastQuestion(employees));