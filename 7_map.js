const sales = [
  { product: 'Laptop', amount: 1000 },
  { product: 'Phone', amount: 500 },
  { product: 'Tablet', amount: 750 },
];

function totalSales() {
   return sales.map(s=>s.amount).reduce((acc,current)=>{
        return acc + current
   },0)
}

console.log(totalSales()); // Expected output: 2250

// ============================= 2 ================================

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 15 },
];

function getAdultNames() {
  return users.filter((user)=>user.age>18).map((newUser)=>newUser.name)
}

console.log(getAdultNames()); // Expected output: ['Alice', 'Charlie']

// ================================== 3 =====================================
const products = [
  { name: 'Laptop', price: 1200, quantity: 5 },
  { name: 'Phone', price: 800, quantity: 10 },
  { name: 'Headphones', price: 50, quantity: 50 },
  { name: 'Tablet', price: 300, quantity: 15 },
];

function totalStockValue() {
   return products.filter(p=>p.price<100).map((newPro)=>newPro.price * newPro.quantity).reduce((curr,finalPro)=>{
        return curr * finalPro
    },1)
}

console.log(totalStockValue()); // Expected output: 28500


// ================================== 4 =====================================
const usersScores = [
  { name: 'Alice', scores: [90, 85, 78] },
  { name: 'Bob', scores: [75, 80, 92] },
  { name: 'Charlie', scores: [88, 90, 87] },
];

function averageScores() {
  const result=usersScores.map((user)=>{
    const avergae=user.scores.reduce((sum,score)=>sum+score ,0)
    return {[user.name]:[avergae.toFixed(2)]}
  })

  return result.reduce((acc,curr)=>({...acc,...curr}),{})
}

console.log(averageScores()); 
// Expected output: { Alice: 84.33, Bob: 82.33, Charlie: 88.33 }

// ================================== 5 =====================================

const students = [
  { name: 'Alice', scores: [90, 80, 75] },
  { name: 'Bob', scores: [60, 55, 58] },
  { name: 'Charlie', scores: [70, 85, 95] },
];

function passingStudents() {
  return students
    .filter(student => student.scores.every(score => score >= 60))  // Filter out students with scores < 60
    .filter(student => {
      const average = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
      return average > 70;  // Keep students whose average score is above 70
    })
    .map(student => student.name);  // Return only the names of passing students
}

console.log(passingStudents());  
// Expected output: ['Alice', 'Charlie']
