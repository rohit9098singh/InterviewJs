// function one(callback){
//     setTimeout(()=>{
//         console.log("first")
//         callback();
//     },4000)
// }

// function two(callback){
//     setTimeout(()=>{
//         console.log("two")
//         callback();
//     },4000)
// }
// function three(callback){
//     setTimeout(()=>{
//         console.log("three")
//     },50)
// }

// one(()=>{
//     two(()=>{
//         three();
//     })
// })

// resolve the hell

function one() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("first");
            resolve();
        }, 1000)
    })
}

function second() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("second");
            resolve();
        }, 1000)
    })
}

function third() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("third");
            resolve();
        }, 1000)
    })
}

one().then(() => second()).then(() => third()).catch((error) => console.log(error))
// async function runtasks(){
//     await one();
//     await second();
//     await third();

// }
// runtasks();

