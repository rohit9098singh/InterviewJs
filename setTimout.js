// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//        console.log(i)
//     },i*1000)
// }

//========================= with let ====================
// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//        console.log(i)
//     },i*1000)
// }

//======================= with iffe ======================
// for(var i=0;i<5;i++){
//     (function(i){
//         setTimeout(() => {
//             console.log(i)
//         }, i*1000);
//     })(i)
// }


// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//        console.log(i)
//     },i*1000)
// }

//setTimeout(callback, delay, arg1, arg2, ...)
//arg1, arg2, ... yeh arguments callback function ke parameters me pass ho jaate hain.

function closureTest(){
    for(let i=0;i<6;i++){
       setTimeout((i) => {
          console.log(i)
       }, 1000*i,i);
    }
}
closureTest()
