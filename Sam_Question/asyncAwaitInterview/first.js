// Q1. Chained Promises:
// Write a function fetchData that simulates fetching user data (1 second delay), then posts related data (1.5 second delay), and finally logs a completion message.

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const user = { name: "rohit", id: 1 };
//     console.log("first promise is to be resolved");
//     resolve(user);
//   }, 1000);
// });

// const promise2 = (user) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const name = user.name;
//       console.log("second promise is to be resolved");
//       resolve(name);
//     }, 1000);
//   });
// };

// promise1
//   .then((user) => promise2(user))
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

const promise1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = { name: "rohit", email: "rohit@gamil.com" }
      res(user)
    }, 1000);
  })
}

const promise2=(user)=>{
  return new Promise((res,rej)=>{
     setTimeout(() => {
        const name=user?.name;
        res(name)
     }, 2000);
  })
}


promise1().then((user)=> promise2(user)).then((name)=>console.log("User name is",name)).catch((err)=>console.log(err))

