const cart=["jeans","pant","table"];

const handledOutput=createOrder(cart)

handledOutput.then((orderId)=>{
    console.log("order Created successfully",orderId)
    // proceedToPay(orderId)
}).catch((error)=>{
    console.log("validation failed :",error.message)
})

function validateCart(){
   return true;
}
function createOrder(cart){
    const promise=new Promise((resolve,reject)=>{ // your promise could be either resolved or be rejected 
       if(!validateCart(cart)){
        const err=new Error("cart not valid")
           reject(err)
       }
       const orderId="12345" // will be fetched from the datbas as it when the order will be cretaed it will crete the orderid aslo
       resolve(orderId)
    })

    return promise;
}
