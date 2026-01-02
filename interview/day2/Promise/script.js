// const button = document.querySelector(".button");

const { error } = require("console");

 button.addEventListener("click",()=>{
    console.log(" Promise is pending..."); 
    const promise=new Promise((res,rej)=>{
        const success=true;

        if(success){
            res("promise resolved successfuly")
        }
        else{
            rej("promise rejected successfully")
        }
    })

    promise.then((res)=>{
        console.log(res);
        alert(res)
    }).catch((e)=>console.log(e))
 })


// // with async await 
// button.addEventListener("click", async () => {
//   try {
//     const message = await new Promise((resolve, reject) => {
//       const success = true; 

//       setTimeout(() => {
//         if (success) {
//           resolve("✅ Promise resolved successfully!");
//         } else {
//           reject("❌ Promise was rejected.");
//         }
//       }, 1000); 
//     });
//     console.log(message);
//     alert(message);
//   } catch (error) {
//     console.log(error);
//     alert(error);
//   }
// });



document.getElementById("button").addEventListener(()=>{
  const p1= new Promise((res,rej)=>{
      let status=200;
      if(status===200){
         res("promise resolve with the status code 200 at here ")
      }
      else{
        rej("promise go rejected with status code 400")
      }
    })
    p1.then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
    })
})
