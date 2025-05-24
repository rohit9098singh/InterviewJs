// for-in => keys/indexes loop karta hai
//  for-in loop is used to itterate over the keys of an object or the index of the array , returns the key as string

// const person={
//     name:"Aman",
//     age:22,
//     city:"Delhi"
// }

// for(let key in person){
//     console.log(key, ":" ,person[key])
// }
//name : Aman
// age : 22
// city : Delhi


// note: remeber the below problems 

const arr=[1,2,3,4];
for(let key in arr){
    console.log(key) // returns the index 0,1,2
}

for(let val of arr){
    console.log(val) // returns the value 1,2,3,4
}