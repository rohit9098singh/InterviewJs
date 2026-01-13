//  Chained Promises:
// Write a function fetchData that simulates fetching user data (1 second delay), then posts related data (1.5 second delay), and finally logs a completion message.
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "rohit" });
//     }, 1000);
//   });
// }

// function fetchPost(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`post of ${user.name}`);
//     }, 1500);
//   });
// }

// function sendAnalytics(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Analytics sent for:", data);
//       resolve("Analytics complete");
//     }, 500);
//   });
// }

// async function processUserData() {
//   try {
//     const user = await fetchUser();
//     const post = await fetchPost(user);
//     const result = await sendAnalytics(post);
//     return result;
//   } catch (error) {
//     console.log("Error in processUserData:", error);
//     throw error;
//   }
// }

// processUserData()
//   .then((res) => console.log("Final Result:", res))
//   .catch((e) => console.log("Caught error:", e));



function fetchUser(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
             const user={name:'Rohit',age:"23"} 
             res(user)
        }, 1000);
    })
}

function getName(user){
    return new Promise((res,rej)=>{
      setTimeout(() => {
        const name=user.name
        res(name)
      }, 2000);
    })
}

function greeting(name){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            const greeting=`hello ${name}`
            res(greeting);
        }, timeout);
    })
}

const callAllPromise=async ()=>{
    const user= await fetchUser();
    const name=await getName(user);
    const greting=await greeting(name);
    return greting;
}

callAllPromise().then((res)=>console.log(res)).catch((err)=>console.log(err))