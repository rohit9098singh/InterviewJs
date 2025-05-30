 // Given an array of objects representing people, where each object has a name property and an age property, write a function that returns the name of the oldest person.

 const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

const oldestPerson=(arr)=>{
   return  arr.reduce((acc,curr)=>{
      return   curr.age >acc.age ? curr :acc
   }).name
}

console.log(oldestPerson(people));


// Write a function that takes an array of objects with a "name" property and returns a new array with just the names.
const arrObj = [
  {
    id: 1,
    name: "anuj",
    own: "bike",
  },
  {
    id: 2,
    name: "taran",
    own: "jeep",
  },
  {
    id: 3,
    name: "ankit",
    own: "bmw",
  },
  {
    id: 4,
    name: "rohan",
    own: "cycle",
  },
];

const getNames=(arr)=>{
    return arr.filter((nam)=>nam.name).map((val)=>val.name)
}

console.log(getNames(arrObj));

// Write a function that takes an array of strings as input and returns a new array with the length of each string, sorted in descending order

const arr = ["Gautam", "Nikhil", "Praveen"];

const descendingArray=(arr)=>{
     return arr.map((val)=>val.length).sort((a,b)=>b-a)
}

console.log(descendingArray(arr))

//Write a function that takes an array of strings as input and returns a new array with only the strings that contain at least one vowel..

const arr2 = ["Gautam", "Nikhil", "Praveen","bd"];

const thirdFunction=(arr)=>{
     const vowels = ["a", "e", "i", "o", "u"];
     return arr.filter((str)=>
      vowels.some((vowel)=>str.toLowerCase().includes(vowel))
    );
}

console.log(thirdFunction(arr2))

// Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const fourthFunction=(arr)=>{
  return  arr.filter((val)=>val<8 && val%2==0)
}

console.log(fourthFunction(arr4));

// Given an array of strings, use the reduce function to find the total length of all the strings combined.

const strings = ["hello", "world", "how", "are", "you"];

const lengthOfStr=(arr)=>{
       const concatStr=arr.reduce((acc,curr)=>acc+curr,"");
       return concatStr.length;
}

console.log(lengthOfStr(strings));

// Given an array of objects representing students, use the reduce function to find the student with the highest grade.
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 70 },
  { name: "Charlie", grade: 90 },
  { name: "Dave", grade: 80 },
];

const higgestGrade=(arr)=>{
    return  arr.reduce((acc,curr)=>curr.grade > acc.grade ? curr:acc)
}

console.log(higgestGrade(students))


// Given an array of voters, objects count how many people voted using reduce
const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const peopleVoted=(arr)=>{
   return arr.filter((val)=>val.voted===true).map((va)=>va.name)
}

console.log(peopleVoted(voters));


// Given an array of objects representing books, where each object has a title property and a year property, write a function that returns the titles of all books published before the year 2000.
const books = [
  { title: "The Great Gatsby", year: 1925 },
  { title: "To Kill a Mockingbird", year: 1960 },
  { title: "One Hundred Years of Solitude", year: 1967 },
  { title: "The Catcher in the Rye", year: 1951 },
  { title: "Beloved", year: 1987 },
  { title: "Brave New World", year: 1932 },
];

const filterbooks=(arr)=>{
    return arr.filter((value)=>value.year<2000).map((res)=>res.title);
}

console.log(filterbooks(books))


// Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array
const numbers = [1, 2, 3, 4, 5];

const complexOper=(arr)=>{
   return arr.filter((a)=>a%2!==0).map((res)=>res * res *res).reduce((acc,curr)=>curr+acc,0)
}

console.log(complexOper(numbers));

// Write a program to find out the maximum and minimum number in an array by using only one reduce method
const input = [3, 5, 6, 1, 14];

const maxMin = (arr) => {
  return arr.reduce((acc, curr) => {
    return {
      max: curr > acc.max ? curr : acc.max,
      min: curr < acc.min ? curr : acc.min
    };
  }, { max: arr[0], min: arr[0] });
};

console.log(maxMin(input)); 

//Given an array of strings, write a function that returns an array of objects representing each unique string and its frequency in the original array.
const string = ["apple", "banana", "apple", "cherry", "cherry", "cherry"];

const uniqueString = (arr) => {
  const freqMap = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  console.log("hello world",freqMap)

  return Object.entries(freqMap).map(([value, count]) => ({
    value,
    count
  }));
};

console.log(uniqueString(string));


// Given an array of objects representing employees, where each object has a name property, a department property, and a salary property, write a function that returns an object representing the total salary of each department. The keys of the object should be the department names, and the values should be the total salaries of all employees in that department.

const employees = [
  { name: "Alice", department: "Engineering", salary: 70000 },
  { name: "Bob", department: "Engineering", salary: 80000 },
  { name: "Charlie", department: "HR", salary: 50000 },
  { name: "David", department: "Sales", salary: 60000 },
  { name: "Eve", department: "Sales", salary: 55000 },
  { name: "Frank", department: "HR", salary: 52000 },
  { name: "Grace", department: "Engineering", salary: 75000 },
  { name: "Heidi", department: "Marketing", salary: 58000 },
  { name: "Ivan", department: "Marketing", salary: 61000 },
  { name: "Judy", department: "Sales", salary: 63000 }
];

const newFunction=(arr)=>{
  return  arr.reduce((acc,curr)=>{
         if(acc[curr.department]){
           return  acc = acc + curr.salary;
         }else{
          return acc=curr.department;
         }
  },{})
}

console.log("hard function",newFunction(employees));

// Given an array. Write a function that will return an array by adding role property in an existing object , For ex: if the person has marks then you need to add role as key and student as value into it, otherwise, role will be key and the value will be an employee

const toChangeArray = [
  { name: "sohail", marks: 10 },
  { name: "tarun" },
  { name: "dhruv", marks: 50 },
  { name: "subhash" },
  { name: "dharmin", marks: 20 },
];

const addRole=(arr)=>{
   return arr.map((person)=>{
      return {
        ...person,
        role:person.hasOwnProperty("marks") ?"student" :"employee"
      }
   })
}

console.log(addRole(toChangeArray));


// Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.
const lastEmployees = [
  { name: "Alice", department: "Sales" },
  { name: "Bob", department: "Marketing" },
  { name: "Charlie", department: "Engineering" },
];

const greetEmployee=(arr)=>{
    return arr.map(({name,department})=>(
           `Welcome ${name} to the ${department} !`
    ))
}

console.log(greetEmployee(lastEmployees));









// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b); // t
// console.log(a === b);// f
// console.log(b === c);//f

// async function foo() {
//     console.log("A");  // 2nd
//     await Promise.resolve();
//     console.log("B");  // 4rd
//     await new Promise(resolve => setTimeout(resolve, 0));
//     console.log("C"); // 5th
// }
// console.log("D"); // 1st
// foo();
// console.log("E") // 3rd


let a = true;
setTimeout(() => {
    a = false;
}, 2000)
while (a) {
    console.log(' -- inside whilee -- '); 
}



// const nums = [1, 2, 3, 4, 5, 6, 7];
// nums.forEach((n) => {
//     if (n % 2 === 0) {
//         break; 
//     }
//     console.log(n);
// });

function func() {
    try {
        console.log(1)
        return
    } catch (e) {
        console.log(2)
    } finally {
        console.log(3)
    }
    console.log(4)
}
func()