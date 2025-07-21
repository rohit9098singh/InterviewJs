// function createBankAccount(initialBalance) {
//     let balance = initialBalance; // private data
  
//     return {
//       deposit: function (amount) {
//         if (amount > 0) {
//           balance += amount;
//           console.log(`Deposited ₹${amount}. New Balance: ₹${balance}`);
//         }
//       },
//       withdraw: function (amount) {
//         if (amount > 0 && amount <= balance) {
//           balance -= amount;
//           console.log(`Withdrew ₹${amount}. New Balance: ₹${balance}`);
//         } else {
//           console.log("Insufficient balance or invalid amount.");
//         }
//       },
//       getBalance: function () {
//         return balance;
//       }
//     };
//   }
  
//   // Account holder creates an account
//   const myAccount = createBankAccount(1000);


  
//   myAccount.deposit(500);       // Deposited ₹500. New Balance: ₹1500
//   myAccount.withdraw(200);      // Withdrew ₹200. New Balance: ₹1300
//   console.log(myAccount.getBalance()); // 1300
  
//   console.log(myAccount.balance); //  undefined — private data


  function createBankAccount(amount){
    let balance=amount;
    return {
       depositeAmount : function(amount){
        if(amount >0){
           balance=balance+amount;
          console.log(`deposited amount ${amount} avalible balance = ${balance}`)
        }
       },
       WithdrawAmount : function(amount){
        if(amount > 0 && amount<=balance){
           balance=balance-amount;
          console.log(`deposited amount ${amount} avalible balance = ${balance}`)
        }
       },
       getBalace:function(){
        return balance
       }
     }
  }


  const myAccount=createBankAccount(500);
  myAccount.WithdrawAmount(100);
  myAccount.depositeAmount(100);
 console.log( myAccount.balance) 
  