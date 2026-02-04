// // Infinite currying means:
// // You can keep calling the function again and again with a single argument.
// // But at some point, when you stop giving more arguments, the function should return the final result.

// const { useEffect } = require("react")
function infiniteCurrying(val1) {
    return function (val2) {
        if (!val2) {
            return val1
        }
        return infiniteCurrying(val1 + val2)
    }
}

console.log(infiniteCurrying(1)(2)(3)(4)(5)(6)(78)())


// useEffect(async ()=>{
//     // logic inside it 
// },[])


// JavaScript ek synchronous language hai → normal code top-to-bottom chalna chahiye.
// Agar await ko globally allow kar diya jaaye to pura script execution ruk jayega jab tak wo Promise resolve na ho.
// Isse event loop, hoisting, aur imports sab gadbad ho jaayenge.
// Isliye await ko async function ke andar hi restrict kiya gaya hai → taaki JS ko pata ho ki “haan yeh part asynchronous hoga, aur baaki script rukega nahi.”

// function infiniteCurrying(value1){
//     return function(val1){
//         if(!val1){
//             return value1
//         }
//         else{
//             return infiniteCurrying(val1+value1)
//         }
//     }
// }

// console.log(infiniteCurrying(2)(2)(3)(4)(4)())

