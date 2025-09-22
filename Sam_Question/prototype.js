// when we want to add a fucntion property which can be used later by all the instance of the function then in that case we prototype

function Student() {
  this.name = "Saikrishna";
  this.exp = "8";
}

// Add a shared property using prototype
Student.prototype.company = "Hexagon";

let std1 = new Student();
std1.exp = "9"; // Override instance property

let std2 = new Student();
std2.exp = "10"; // Override instance property

console.log(std1.company);
console.log(std2);


