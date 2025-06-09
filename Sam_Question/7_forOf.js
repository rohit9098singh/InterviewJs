// for-of loop is used to iterate over the values of an iterable object like arrays, strings, sets, etc.

// It returns the actual values.

// Use when you want to loop through array elements or characters in a string.


const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

// caution: Agar object ke key + value dono chahiye with for-of, to aise likho:

const obj={a:1,b:2};

for (let [key,value] of Object.entries(obj)){
    console.log(key,value)
}

//Object.entries(obj) converts an object into an array of [key, value] pairs.

const person={
  name:"rohit",
  age:28
}

for(let [key,value] of Object.entries(person) ){
  console.log(key)
  console.log("hello item value",value)
}