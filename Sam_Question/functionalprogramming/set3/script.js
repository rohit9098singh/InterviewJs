// Write an ES6 function that takes an array of objects representing cars with properties make, model, and year. Return the first car object that is a Toyota and the year is after 2010.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];
const firstFucntion=(arr)=>{
    return arr.find(car => car.make === "Toyota" && car.year > 2010);
}

console.log(firstFucntion(cars));


// Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the cars that were made after the year 2012.

const cars2 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const secondFucntion=(arr)=>{
    return arr.filter((val)=>(
        val.year>2012
    ))
}

console.log(secondFucntion(cars2));

// 3. Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category 

const products = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

const thirdFunction=(arr,category)=>{
    return arr.find((value)=>value.category===category);
}

console.log(thirdFunction(products, "electronics"));

// 4. 4. Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".
const products2 = [
  { name: "Toothbrush", price: 29, category: "health" },
  { name: "Coffee Maker", price: 99, category: "home" },
  { name: "iPad", price: 799, category: "electronics" },
  { name: "Smartwatch", price: 199, category: "electronics" },
];

const fourthFunction=(arr,category)=>{
    return arr.filter((value)=>value.category===category);
}

console.log(fourthFunction(products, "electronics"));


// 5. Write an ES6 function that takes an array of objects containing student information (name, age, grade) and returns an array with only the students who have a grade above a certain value.

const students = [
  { name: "Alice", age: 16, grade: 90 },
  { name: "Bob", age: 17, grade: 80 },
  { name: "Charlie", age: 15, grade: 95 },
  { name: "David", age: 16, grade: 85 },
];

const fifthFunction=(arr,grade)=>{
    return arr.filter((value)=>value.grade>=grade)
}

console.log(fifthFunction(students,90))

// 6.Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.
const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193,
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const sixthFucntion=(arr)=>{
    return arr.find((value)=>value.pageCount>500);
}

console.log(sixthFucntion(books));

// 7. Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.
const customers = [
  { name: "John", age: 25, gender: "Male" },
  { name: "Jane", age: 30, gender: "Female" },
  { name: "Bob", age: 40, gender: "Male" },
  { name: "Alice", age: 35, gender: "Female" },
];

const seventhFunction=(arr)=>{
    return arr.filter((value)=>value.gender==="Male");
}

console.log(seventhFunction(customers));

// 8. Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.
const games = [
  {
    title: "The Witcher 3: Wild Hunt",
    developer: "CD Projekt Red",
    genre: "RPG",
  },
  { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
  { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
  {
    title: "The Legend of Zelda: Breath of the Wild",
    developer: "Nintendo",
    genre: "Adventure",
  },
];


const eightFunction=(arr,genre)=>{
    return arr.filter((value)=>value.genre===genre);
}

console.log(eightFunction(games,"Adventure" ));


// 9. Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.
const cars4 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const ninthFunction=(arr)=>{
    return arr.filter((val)=>(
        val.year>2012
    ))
}

console.log(ninthFunction(cars4));


// 11. Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.
const numbers = [12, 23, 4, 2, 11, 21];

const sumOfEvenNumber=(nums)=>{
    return nums.reduce((acc,curr)=>(curr%2==0 ?acc+curr :acc),0)
}

console.log(sumOfEvenNumber(numbers));

// 12. Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.
const students6 = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
  { name: "Alice", score: 85 },
];

const sumOfScores = (arr) => {
  return arr.reduce((acc, curr) => acc + curr.score, 0) / arr.length;
};


console.log(sumOfScores(students6));

// 13. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.

const products6 = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

const sumOfProductCost = (arr) => {
  return arr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
};

console.log(sumOfProductCost(products6));

// 14. Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.


const fruits = ["apple", "banana", "cherry", "mango", "grape"];

const lastSecondFunction=(arr)=>{
  return arr.reduce((acc, curr) => acc + curr, " ,");
};

console.log(lastSecondFunction(fruits))


// Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.
 const numbers7 = [10, 5, 8, 3, 6];

 const getMinimumNumber = (numbers) =>{
   return numbers.reduce((acc,curr)=>curr<acc ? curr :acc,numbers[0])
 }

 console.log(getMinimumNumber(numbers7))