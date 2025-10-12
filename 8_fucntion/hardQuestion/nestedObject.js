let student = {
  name: "Rohit",
  address: {
    city: "Mumbai"
  }
};

console.log(student.address.hello)

// Yeh error nahi dega, kyunki address object exist karta hai,
// bas uske andar hello property nahi hai → so result undefined.
let student2 = {
  name: "Rohit"
};

// bina optional chaining:
console.log("this is the working of the comodity right now at here ",student2.address.city); 
// ❌ Error: Cannot read properties of undefine


const arr=[1,2,3,4,5];
const res=arr.reduce(num=>num=2)
console.log("hello world",res)


function check(){
  throw new Error(" params is required")
}
function show(name=check()){
  console.log(name)
}

console.log(show("tijdje"))