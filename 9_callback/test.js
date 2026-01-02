// function fetchUser() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const user = { name: "rohit", age: 36 };
//             console.log("then user details");
//             res(user);
//         }, 1000)

//     })
// }

// function getName(user) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const name = user?.name;
//             console.log("the name of the user is", name);
//             res(name)
//         }, 3000)

//     })
// }
// function greet(name) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const greeting = ` hello ${name} whats up what is going on`;
//             res(greeting);
//         }, 4000)

//     })
// }

// fetchUser().then((user) => getName(user)).then((name) => greet(name)).then((res) => console.log(res))


function fetchUser() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const user = { name: "ROhit", age: 30 }
            res(user)
        }, 2000)
    })
}

function getName(user) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const name = user.name;
            res(name);
        }, 2000);

    })
}

function getResult(name){
    return new Promise((res,rej)=>{
        setTimeout(() => {
              const greet=`hello i am you at here ${name}`
              res(greet)
          }, 1000);
    })
}

fetchUser()
  .then((user) => (getName(user)))        // RETURN the promise
  .then(name => (getResult(name)))      // RETURN the promise
  .then(greet => (console.log(greet)))
  .catch(err => console.log(err));
