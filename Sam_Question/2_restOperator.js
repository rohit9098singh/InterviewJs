function Example(...args){
console.log(args)
}
Example(1,2,3,4);



function restOperator(firstObj,...restObject){
    const res= restObject.reduce((acc,curr)=>({...acc,...curr}),{...firstObj})
    console.log(res)
}



// restOperator(
//   { name: "rohit", age: 16 },
//   { name: "abhishek", age: 12 },
//   { city: "Delhi" },
//   {language:"bangoli",name:"bhikari"}
// );


//===================================================
// function test(a, ...rest) {
//   console.log(a, rest);
// }
// test(1, 2, 3, 4);

// // 1 [2, 3, 4]


// function test(a, ...rest) {
//   console.log(rest.length);
// }
// test(5);
//0

const obj = {
  a: 1,
  b: { x: 2, y: 3 },
  c: 4
};
const { a, ...rest } = obj;
console.log("rest of the data at here ",rest);


// function test(...rest) {
//   let rest = [1, 2]; // ❌ SyntaxError
// }

