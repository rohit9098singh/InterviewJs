// const user = {
//   id: 101,
//   name: "Rohit"
// };

// Object.defineProperty(user, 'id', {
//   writable: false,       
//   configurable: false    
// });


// user.id = 999;       // ❌ won't change
// delete user.id;      // ❌ won't delete
// user.name = "Amit";  // ✅ allowed

// console.log(user); 



// function any(){
  
//     c=1;
  
// }
// any()
// console.log("here",c)

// console.log(012)

foo()
function foo(){
    console.log("hello")
}
foo()

// async function hello(){
//     return "fuck"
// }

// const callfuncion=async()=>{
//    const value=await hello();
//    console.log(value)
// }
// callfuncion()

function abc(){
    console.log("hii")
    let a=10
}

const value=new abc();


let user={
    name:"hello",
    age:29
}

const {name,age}=user;
console.log(name,user)

// Step 1: Nayi key banake purani value assign karo
user.username = user.name;
// // Step 2: Purani key hata do
delete user.name;
console.log(user);


// user["user-name"] = user.name;
// // Step 2: Delete the old key
// delete user.name;
// console.log(user);


//================================================

// when object key is in "" we cannot user . in that case 

let details={
    "user-name":"abs",
    "age":"23"
}

const { ["user-name"]: userName, age:userAge } = details;

console.log(userName); // abs
console.log(userAge);


//==============================================
// export default function ClickCounter() {
//   const [count, setCount] = useState(0);
//   const timerRef = useRef();

//   const startInterval = () => {
//     timerRef.current = setInterval(() => {
//       setCount(count + 1);       
//       console.log(count);         
//     }, 1000);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => startInterval()}>
//         Increment
//       </button>
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";

// export default function ClickCounter() {
//   const [count, setCount] = useState(0);
//   const timerRef = useRef();

//   const startInterval = () => {
//     timerRef.current = setInterval(() => {
//       setCount(prev => prev + 1); 
//     }, 1000);
//   };

 
//   useEffect(() => {
//     console.log("Updated count:", count);
//   }, [count]); 

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={startInterval}>
//         Increment
//       </button>
//     </div>
//   );
// }

//========================================================

// import React, { useState, useRef } from "react";

// export default function ClickCounter() {
//   const countRef = useRef(0);                
//   const [countState, setCountState] = useState(0); 

//   return (
//     <div>
//       <p>CountRef: {countRef.current}</p>     

//       <button onClick={() => (countRef.current += 1)}>
//         Increment Ref
//       </button>

//       <p>CountState: {countState}</p>         

//       <button onClick={() => setCountState(countState + 1)}>
//         Increment State
//       </button>
//     </div>
//   );
// }


//=======================================================
// import React, { useState } from 'react';

// export default function ExpenseTracker() {
//   const [expenseName, setExpenseName] = useState('');
//   const [cost, setCost] = useState('');
//   const [expenseDetails, setExpenseDetails] = useState([]);

//   const onAddExpense = (e) => {
//     e.preventDefault();

//     if (!expenseName || !cost) return;

//     const newExpense = {
//       name: expenseName,
//       cost: Number(cost),
//     };

//     setExpenseDetails([...expenseDetails, newExpense]);
//     setExpenseName('');
//     setCost('');
//   };

//   // 🔢 Calculate total cost
//   const totalCost = expenseDetails.reduce((total, item) => total + item.cost, 0);

//   return (
//     <div>
//       <form id="expense-tracker" onSubmit={onAddExpense}>
//         <input
//           type="text"
//           placeholder="Enter expense name"
//           value={expenseName}
//           onChange={(e) => setExpenseName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Enter cost"
//           value={cost}
//           onChange={(e) => setCost(e.target.value)}
//         />
//         <button type="submit">Add Expense</button>
//       </form>

//       {/* Expense Table */}
//       {expenseDetails.length > 0 && (
//         <>
//           <table border="1" style={{ marginTop: "20px", width: "300px" }}>
//             <thead>
//               <tr>
//                 <th>Expense Name</th>
//                 <th>Cost</th>
//               </tr>
//             </thead>
//             <tbody>
//               {expenseDetails.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.name}</td>
//                   <td>{item.cost}</td>
//                 </tr>
//               ))}
//               <tr>
//                 <td><strong>Total</strong></td>
//                 <td><strong>{totalCost}</strong></td>
//               </tr>
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// }





