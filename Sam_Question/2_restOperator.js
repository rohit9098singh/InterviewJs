function Example(...args){
console.log(args)
}
Example(1,2,3,4);



function restOperator(firstObj,...restObject){
    const res= restObject.reduce((acc,curr)=>({...acc,...curr}),{...firstObj})
    console.log(res)
}


restOperator(
  { name: "rohit", age: 16 },
  { name: "abhishek", age: 12 },
  { city: "Delhi" },
  {language:"bangoli",name:"bhikari"}
);