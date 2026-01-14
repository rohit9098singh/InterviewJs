// the main functionlaity of the symbol is to 
// generate a unique values even if the description is same 

const s1=Symbol("id");
const s2=Symbol("id");

console.log(s1==s2)
console.log(s1=== s2)

// symbol ke property loop me nhi aate hai 

const secret=Symbol("secret");
const obj = {
  name: "Admin",
  [secret]: "12345"
};

for (let key in obj) {
  console.log(key);
}

//symbol key directly print nhi kar sakte hai 
const s = Symbol("test");

console.log(s);          // Symbol(test)
console.log(s.toString());
console.log("value is " + s);