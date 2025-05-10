const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("p1 success")},3000)
    setTimeout(()=>{reject("p1 fail")},3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("p2 success")},1000)
    // setTimeout(()=>{reject("p1 success")},3000)

})
const p3=new Promise((resolve,reject)=>{
    // setTimeout(()=>{resolve("p3 success")},2000)
    setTimeout(()=>{reject("p3 fail")},2000)
})

Promise.any([p1,p2,p3])
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.error(err.errors)
})


// use the keyword first settled ok

// all fail gives the agrigate error note the keyword