// // Functions can be treated like values — assigned to variables, passed as arguments, or returned from other functions.
// const say=function (){
//     console.log("hello")
// }

// const greet=say
// greet();



// //A function that is passed as an argument to another function, and then called ("called back") inside that outer function

// function process(callback) {
//   console.log("Before callback");
//   callback(); // "called back" here
//   console.log("After callback");
// }

// process(function () {
//   console.log("I am the callback");
// });


// // ============================ this value ===============================

// const user={
//     name:"Rohit",
//     age:22,
//     greet:function(){
//        const arrow= ()=>{
//         console.log(`hello ${this.name}`)
//     }
//     arrow()
//     }
// }

// user.greet();


// // stale clousere

function start(){
    let count=0;

    const message=`Count is ${count}`;

    setTimeout(() => {
      console.log(message)
    }, 3000);

    count=5;
}
start()

// fix 

// function end(){
//   let count=0
//    setTimeout(() => {
//       console.log(`Count is ${count}`)
//     }, 3000);

//     count=5;
// }


function setp1(callBack){
    console.log("step1")
    callBack()
}

function step2(callBack){
    console.log("step2")
    callBack()
}

function step3(){
    console.log("step3")
}

setp1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("all")
        })
    })
})

