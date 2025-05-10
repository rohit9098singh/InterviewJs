async function handlePromise(){
    try {      
        const response=  await fetch("https://dummyjson.com/products");
        const data=await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}
handlePromise();

// one way to handle erros onother way below

async function handlePromise2(){
        const response=  await fetch("https://dummyjson.com/products");
        const data=await response.json();
        console.log(data)   
}
handlePromise2().catch((error)=>{
    console.log(error)
});

// bz async function returns the error