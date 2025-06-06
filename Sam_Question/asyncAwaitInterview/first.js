// Q1. Chained Promises:
// Write a function fetchData that simulates fetching user data (1 second delay), then posts related data (1.5 second delay), and finally logs a completion message.

function fetchUser(){
    return new Promise((resolve,reject)=>{
        setInterval(() => {
            resolve({id:1,name:"rohit"})
        }, 1000);
    })
}

function fetchPost(user){
    return new Promise((resolve,reject)=>{     
        setTimeout(() => {
            resolve(`post of ${user.name}`)
        }, 1500);
    })
}

fetchUser()
.then((user)=>{
    console.log(user);
   return  fetchPost(user)
}).then((post)=>{
    console.log(post)
}).catch((e)=>{console.log(e)})


