// the main functionlaity of the symbol is to generate a unique values even if the description is same 


const s1=Symbol("id");
const s2=Symbol("id");

console.log(s1==s2)
console.log(s1=== s2)