const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("p1 success")},3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("p2 success")},1000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("p3 success")},2000)
    // setTimeout(()=>{reject("p3 fail")},2000)
})

Promise.all([p1,p2,p3])
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.error(err)
})

// success jo hai vo 3 sec ke baadh he aata hai sab ka wait karta hai 

// failure but agar p2 fail hojat ahai to vo 1 sec pe he reply de deta hai kyuke vo error aagay us array of promise me then vo kise ka wait nhi karta hai agar 2 sec baadh hoga to 2 sec baadh error aayega

