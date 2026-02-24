// let printfullName=function(hometown){
//     console.log(this.fistname + " " + this.lastname + " " + hometown)
// }

// let name={
//     fistname:"rohit",
//     lastname:"singh",
   
// }
// printfullName.call(name,"delhi"); // first parameter is the refrence to the variable and second is the argument 


// let name2={
//     fistname:"bhuwan",
//     lastname:"singh",
//     // printfullName:function(){
//     //     console.log(this.fistname + " " + this.lastname)
//     // }  this is not the better way to do it as we have alresy done it in above so we go for call method
// }
// // call => function borrowing



// // =================================  APPLY METHOD =========================
// printfullName.call(name2,"mumbai")

// printfullName.apply(name,["mumbai"]) // passed in an arary is the only differnce 


// // ================================  BIND METHOD =====================
// let printMyName=printfullName.bind(name2,"mumbai") // it resturn a method which can be called later on 

// console.log(printMyName)
// printMyName();


// let name={
//     firstName:"rohit",
//     lastName:"singh"
// }
// let printDetails=function(hometown){
//     console.log(this.firstName,this.lastName,hometown)
// }

// printDetails.call(name,"mumbai")

// printDetails.apply(name,["alabahdh"])

// let returnedRef=printDetails.bind(name,"ban")
//  returnedRef();



// let name1={
//     firstName:"Rohit",
//     lastName:"singh"
// }
// let name2={
//     firstName:"sumit",
//     lastName:"kumar"
// }

// let printFullName=function(thirdParameter){
//   console.log(this.firstName,this.lastName,thirdParameter)
// }

// printFullName.call(name1,"welcome here ")

let user1={
    firstName:"Rohit",
    lastName:"singh"
}

let user2={
    firstName:"Aman",
    lastName:"Kuamr",
}

function printName(thirdParameter){
       console.log(`${this.firstName} + ${this.lastName} + ${thirdParameter}`)
}

printName.call(user1,"mumbai")

printName.apply(user2,["check here"])

const res=printName.bind(user2,"mumbai");
res()
