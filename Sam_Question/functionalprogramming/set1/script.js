// 1. Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

const arr=[1,2,3,4,5,6];
const modifiedArr=arr.map((value)=>(
     value +3
))

console.log(modifiedArr);

// 2. Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

const myArray = ["apple", "banana", "cherry"];
const capitalisedArray = (arr) => arr.map(value => value.toUpperCase());

console.log("capitalized :",capitalisedArray(myArray))


// 3. Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];

const modifiedPeople=(arr)=>{
    return arr.map((value)=>(
          value.age
    ))
}

console.log(modifiedPeople(people));

//4. Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];

const LowercaseProduct=(arr)=>{
    return arr.map((value)=>(
         value.name.toLowerCase()
    ))
}

console.log(LowercaseProduct(products))

// 5. Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method

const cities = [
  { name: "New York", population: 8538000 },
  { name: "Los Angeles", population: 3976000 },
  { name: "Bangalore", population: 13608000 },
];

const returnName=(arr)=>{
    return arr.map((value)=>(
        value.name
    ))
}

console.log(returnName(cities))

// 6. Write an ES6 function that takes an array of strings and returns an array with only the strings that have a length greater than 5
// Your ES6 function here

const fruits = ["apple", "banana", "cherry", "watermelon", "pineapple"];
const filterLongStrings = (fruits) =>
  fruits.filter((value) => value.length > 5);
console.log(filterLongStrings(fruits));

// 7. Write an ES6 function that takes an array of numbers and returns an array with only the numbers that are divisible by 3 and also by 5.

const numbers1 = [1, 2, 30, 4, 15];
const isDivisibleBy3and5 = (numbers1) =>
  numbers1.filter((num) => num % 3 === 0 && num % 5 === 0);
console.log(isDivisibleBy3and5(numbers1));

// 8. Write an ES6 function that takes an array of objects with the properties name and age, and returns an array with only the objects that have an age greater than 30.
// Your ES6 code here

const people1 = [
  { name: "Rahul", age: 25 },
  { name: "Raj", age: 35 },
  { name: "Vijay", age: 45 },
];
const filterByAge = (people1) => people1.filter((obj) => obj.age > 30);
console.log(filterByAge(people1));

// 9. Write an ES6 function that takes an array of objects with the properties name and score, and returns an array with only the objects that have a score greater than 80.
// Your ES6 code here

const students = [
  { name: "Aditya", score: 85 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];
const filterByScore = (students) => students.filter((std) => std.score > 80);
console.log(filterByScore(students));

// 12. Write an ES6 function that takes an array of objects containing employee information (name, age, salary) and returns an array with only the employees who earn a salary above 22000 and age is above 25.

// Your ES6 code here

const employees = [
  { name: "Abhay", age: 25, salary: 20000 },
  { name: "Joice", age: 30, salary: 35000 },
  { name: "Reena", age: 35, salary: 15000 },
  { name: "Jeena", age: 40, salary: 50000 },
]

const result=(arr)=>{
    return arr.filter((value)=>(
        value.salary >22000 && value.age>25
    ))
}

console.log(result(employees));