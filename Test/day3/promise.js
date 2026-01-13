// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve(" Promise resolved!");
//   } else {
//     reject(" Promise rejected!");
//   }
// });

// myPromise.then((result) => {
//     console.log(result)})
//   .catch((error) => {
//     console.log(error);   
//   });

const myPromises=new Promise((resolve,reject)=>{
  let sucess=true
 if(sucess){
  resolve("promise has been resolved at here with the value")
 }
 else{
  reject("promise got rejected with value")
 }
})

myPromises.then((result)=>{
  console.log(result)
}).catch((err)=>console.log(err))