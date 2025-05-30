const p=new Promise((res,rej)=>{
    console.log("pending state.....");
    setTimeout(()=>{
        res("he i m resolved");
    },10000)
})

p.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))
.finally(()=>console.log("settled"))